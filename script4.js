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
        case 'Normal Tablet View':
            width = 768;
            height = 1024;
            break;
        case 'iPad 9.7':
            width = 768;
            height = 1024;
            break;
        case 'iPad Pro 10.5':
            width = 834;
            height = 1112;
            break;
        case 'Samsung Galaxy Tab S6':
            width = 800;
            height = 1280;
            break;
        case 'Amazon Fire HD 10':
            width = 800;
            height = 1280;
            break;
        case 'Microsoft Surface Pro 7':
            width = 912;
            height = 1368;
            break;
        case 'Lenovo Tab M10':
            width = 800;
            height = 1280;
            break;
        case 'Huawei MediaPad M5':
            width = 768;
            height = 1152;
            break;
        case 'Asus ZenPad 3S 10':
            width = 768;
            height = 1024;
            break;
        case 'Samsung Galaxy Tab A 10.1':
            width = 800;
            height = 1280;
            break;
        case 'Google Pixel Slate':
            width = 1200;
            height = 2000;
            break;
        case 'Sony Xperia Tablet Z':
            width = 1200;
            height = 1920;
            break;
        case 'Nokia T20':
            width = 1200;
            height = 2000;
            break;
        case 'Samsung Galaxy Tab S7':
            width = 800;
            height = 1280;
            break;
        case 'iPad Mini':
            width = 768;
            height = 1024;
            break;
        case 'Lenovo Yoga Tab 3 Pro':
            width = 2560;
            height = 1600;
            break;
        case 'Acer Iconia Tab 10':
            width = 1280;
            height = 800;
            break;
        case 'Dell Venue 10':
            width = 2560;
            height = 1600;
            break;
        case 'Samsung Galaxy Tab S5e':
            width = 1600;
            height = 2560;
            break;
        case 'Amazon Fire HD 8':
            width = 800;
            height = 1280;
            break;
        case 'Microsoft Surface Go 2':
            width = 1920;
            height = 1280;
            break;
        default:
            width = 768;
            height = 1024;
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
}
