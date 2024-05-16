function submitVote() {
    var candidates = document.getElementsByName('candidate');
    var selectedCandidate;
    for (var i = 0; i < candidates.length; i++) {
        if (candidates[i].checked) {
            selectedCandidate = candidates[i].value;
            break;
        }
    }
    if (selectedCandidate) {
        alert("คุณได้โหวตเลือก " + selectedCandidate + " เรียบร้อยแล้ว!");
    } else {
        alert("กรุณาเลือกผู้สมัครที่ต้องการโหวต");
    }
}
