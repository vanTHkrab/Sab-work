// ฟังก์ชันสำหรับการแสดงสไลด์โชว์
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 10000); // Change image every 10 seconds
}

// ฟังก์ชันสำหรับการจัดการฟอร์มล็อกอิน
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // ป้องกันฟอร์มจากการส่งแบบปกติ

    // รับค่าจากฟอร์ม
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // ส่งข้อมูลฟอร์มไปยังเซิร์ฟเวอร์
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => {
        if (response.ok) {
            // ถ้าล็อกอินสำเร็จ ให้เปลี่ยนเส้นทางไปยังหน้า index.html
            window.location.href = 'index.html';
        } else {
            // ถ้าล็อกอินไม่สำเร็จ แสดงข้อความผิดพลาด (คุณสามารถปรับแต่งได้)
            alert('Login failed. Please check your username and password.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
