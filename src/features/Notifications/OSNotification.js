
  const requestPermission = async () => {
    if (!("Notification" in window)) {
      return console.log("This browser does not support notifications.")
    }
    
    const permission = await Notification.requestPermission()
    
    if (permission === "granted") {
 
      const notification = new Notification("Hello!", {
        body: "This is a browser notification.",
        icon: "/path/to/icon.png" // Optional icon
      })
  
      // Optional: Handle click event
      notification.onclick = () => {
        window.focus()
        notification.close()
      }
    }
  }
