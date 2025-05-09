function Alert(){
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
        }
      });
}

export default Alert;