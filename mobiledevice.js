function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};
if(isMobileDevice()) {
    console.log('The Device is Mobile Device!');
}
