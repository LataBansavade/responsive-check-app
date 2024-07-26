function loadWebsite() {
    const urlInput = document.getElementById('urlInput').value.trim();
    if (urlInput === '') {
        alert('Please enter a valid URL.');
        return;
    }
  
    const iframe = document.getElementById('websiteFrame');
    iframe.src = 'about:blank'; // Clear previous content
    iframe.src = addHttpProtocol(urlInput); // Load website into iframe
}
  
function addHttpProtocol(url) {
    if (!/^https?:\/\//i.test(url)) {
        url = 'http://' + url;
    }
    
    return url;
}
  
function loadPreset() {
    const urlInput = document.getElementById('urlInput').value.trim();
    if (urlInput === '') {
        alert('Please enter a valid URL.');
        return;
    }
  
    const deviceSelect = document.getElementById('deviceSelect');
    const selectedDevice = deviceSelect.value;
  
    const iframe = document.getElementById('websiteFrame');
    iframe.src = 'about:blank'; // Clear previous content
  
    let width, height;
    switch (selectedDevice) {
        case 'standard desktop':
            width = 1920;
            height = 1080;
            break;
        case 'older laptops':
            width = 1366;
            height = 768;
            break;
        case 'mid-sized monitors':
            width = 1440;
            height =900;
            break;
        case 'larger monitors':
            width = 2560;
            height = 1440;
            break;
      
        default:
            width = 1607;
            height = 978;
            break;
    }
  
    iframe.width = width + 'px';
    iframe.height = height + 'px';
    iframe.src = addHttpProtocol(urlInput); // Load user-entered website into iframe
}

function applyCustomSize() {
    const customWidth = document.getElementById('customWidth').value.trim();
    const customHeight = document.getElementById('customHeight').value.trim();
    const urlInput = document.getElementById('urlInput').value.trim();
  
    if (urlInput === '') {
        alert('Please enter a valid URL.');
        return;
    }

    if (customWidth === '' || customHeight === '') {
        alert('Please enter both width and height.');
        return;
    }

    const iframe = document.getElementById('websiteFrame');
    iframe.width = customWidth + 'px';
    iframe.height = customHeight + 'px';
    iframe.src = addHttpProtocol(urlInput); // Load user-entered website into iframe
   
    // Clear input fields after applying custom size
    document.getElementById('customWidth').value = '';
    document.getElementById('customHeight').value = '';
}


