export default function getRelativeTime(timestamp) {
  const date = new Date(timestamp)
  const now = new Date()
  const diffInSeconds = Math.round((date - now) / 1000)
  const absSeconds = Math.abs(diffInSeconds)

  // 1. If more than 30 days, return a standard date (e.g., "Oct 12, 2023")
  if (absSeconds > 2592000) {
    return new Intl.DateTimeFormat(navigator.language, {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).format(date)
  }

  // 2. Otherwise, find the best relative unit
  const rtf = new Intl.RelativeTimeFormat(navigator.language, { numeric: 'auto' })
  
  const units = [
    { unit: 'day', seconds: 86400 },
    { unit: 'hour', seconds: 3600 },
    { unit: 'minute', seconds: 60 },
    { unit: 'second', seconds: 1 }
  ]

  for (const { unit, seconds } of units) {
    if (absSeconds >= seconds || unit === 'second') {
      return rtf.format(Math.floor(diffInSeconds / seconds), unit)
    }
  }
}

// Clean usage in your feed:
// <span>{getRelativeTime(post.createdAt)}</span>

/*

Since you are using React (without Next.js), you don't have to worry about SSR hydration errors, which makes this much easier.
To keep your timestamps "live" (so a post doesn't say "5 minutes ago" for an hour while the user is looking at it), you should wrap the logic in a custom hook. This ensures that only the time strings re-render, rather than your entire feed.
## The useRelativeTime Hook
This hook takes your timestamp and sets up an internal timer to refresh the string every minute.

import { useState, useEffect, useMemo } from 'react';

// Use the function we built earlier
function getRelativeTime(timestamp) {
  const date = new Date(timestamp);
  const now = new Date();
  const diffInSeconds = Math.round((date - now) / 1000);
  const absSeconds = Math.abs(diffInSeconds);

  if (absSeconds > 2592000) {
    return new Intl.DateTimeFormat(navigator.language, {
      day: 'numeric',
      month: 'short',
    }).format(date);
  }

  const rtf = new Intl.RelativeTimeFormat(navigator.language, { numeric: 'auto' });
  const units = [
    { unit: 'day', seconds: 86400 },
    { unit: 'hour', seconds: 3600 },
    { unit: 'minute', seconds: 60 },
    { unit: 'second', seconds: 1 }
  ];

  for (const { unit, seconds } of units) {
    if (absSeconds >= seconds || unit === 'second') {
      return rtf.format(Math.floor(diffInSeconds / seconds), unit);
    }
  }
}

export function useRelativeTime(timestamp) {
  // Initialize state with the current formatted string
  const [displayTime, setDisplayTime] = useState(() => getRelativeTime(timestamp));

  useEffect(() => {
    // Update the string every 60 seconds
    const interval = setInterval(() => {
      setDisplayTime(getRelativeTime(timestamp));
    }, 60000);

    // Clean up the timer if the component unmounts
    return () => clearInterval(interval);
  }, [timestamp]);

  return displayTime;
}

## How to use it in your Post component:
Instead of calling the function directly in your JSX, call the hook at the top of your component.

function Post({ data }) {
  const timeAgo = useRelativeTime(data.timestamp);

  return (
    <div className="post-card">
      <p>{data.content}</p>
      <span className="timestamp">{timeAgo}</span>
    </div>
  );
}

## Why this is the React "Best Practice":

   1. Encapsulation: The logic for calculating time and the timer are hidden inside the hook.
   2. Memory Management: Using clearInterval in the useEffect cleanup prevents memory leaks if the user navigates away from the feed.
   3. Performance: Only the <span> containing the time will re-render when the timer ticks, not the whole post content.

Do you have a loading state or a skeleton screen in your feed where these timestamps might need to be hidden initially?



*/
