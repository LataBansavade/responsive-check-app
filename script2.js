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
        case 'iPhone 14':
            width = 390;
            height = 844;
            break;
        case 'Samsung S8+':
            width = 360;
            height = 740;
            break;
        case 'Pixel 7':
            width = 393;
            height = 851;
            break;
        case 'iPhone SE':
            width = 320;
            height = 568;
            break;
        case 'Galaxy Note 10':
            width = 412;
            height = 869;
            break;
        case 'OnePlus 8':
            width = 412;
            height = 915;
            break;
        case 'Huawei P30':
            width = 360;
            height = 780;
            break;
        case 'Sony Xperia 1':
            width = 411;
            height = 960;
            break;
        case 'Google Pixel 4':
            width = 380;
            height = 800;
            break;
        case 'iPhone 12':
            width = 390;
            height = 844;
            break;
        case 'Samsung Galaxy S20':
            width = 360;
            height = 800;
            break;
        case 'LG G8':
            width = 412;
            height = 869;
            break;
        case 'Moto G7':
            width = 360;
            height = 780;
            break;
        case 'Xiaomi Mi 9':
            width = 393;
            height = 851;
            break;
        case 'Oppo Find X2':
            width = 412;
            height = 915;
            break;
        case 'Vivo V20':
            width = 412;
            height = 915;
            break;
        case 'Realme X50':
            width = 412;
            height = 900;
            break;
        case 'Nokia 8.3':
            width = 412;
            height = 869;
            break;
        case 'Asus ROG Phone 3':
            width = 412;
            height = 900;
            break;
        case 'ZTE Axon 10 Pro':
            width = 412;
            height = 900;
            break;
        default:
            width = 375;
            height = 667;
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


