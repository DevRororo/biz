var reviewStart = document.getElementById('reviewButton');
var copyClipboard = document.getElementById('copyClipboard');
var reviewSubmit = document.getElementById('reviewForm');

// <!-- 리뷰작성 바로가기 버튼 클릭 -->
reviewStart.addEventListener("click",moveToReview);
function moveToReview(){
  location.href="#reviewTitle"
}
// <!-- 클립보드 복사 완료 alert -->
copyClipboard.addEventListener("click",clipboard);
function clipboard(){
    alert('링크주소가 복사되었습니다.');
}
// <!-- 리뷰 제출 -->
reviewSubmit.addEventListener("submit",submitReview);
function submitReview(){
  alert('리뷰 작성이 완료되었습니다. 이벤트 응모 완료!');
}
