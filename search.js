function sendSearch(selectedText) {
    var serviceCall = 'http://www.esvbible.org/search/'+selectedText;
    chrome.tabs.create({url: serviceCall});
}
chrome.contextMenus.create({ title: "Find '%s' in ESV bible",
                             contexts:["selection"],
                             onclick: function(info, tab) {
                                sendSearch(info.selectionText);
                             }
                            });
