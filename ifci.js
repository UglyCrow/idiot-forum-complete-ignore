// DOMから無視リストの対象になっているコメントのノードを集めてミュートする
function doMute() {
    const ignoreCommentNodes = document.getElementsByClassName('ignoreComment');
    for (let i = 0; i< ignoreCommentNodes.length; i++) {
        ignoreCommentNodes[i].parentNode.parentNode.style.display = 'none';
    }
}

doMute() // 初回実行

// 以下、遡って読んだときに再実行する用
const commentsNode = document.getElementById('cmtlst');
const config = { attributes: false, childList: true, subtree: true };
const observer = new MutationObserver(doMute);
observer.observe(commentsNode, config);