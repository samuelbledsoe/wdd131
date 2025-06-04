function viewWireframe(type) {
    let url = "";
    if (type === 'mobile') {
        url = "../images/mobilewire.png";  // one level up to images
    } else if (type === 'desktop') {
        url = "../images/largewire.png";   // one level up to images
    }
    if (url) {
        window.open(url, '_blank');
    } else {
        alert("Wireframe not found.");
    }
}
