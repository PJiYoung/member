// 아이디 중복 확인 (간단한 예시로 임의의 중복 아이디 리스트 사용)
const existingUsernames = ['user1', 'test123', 'admin'];
let isUsernameValid = false;
let isPasswordValid = false;
let isPasswordMatch = false;

document.getElementById('checkUsernameBtn').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const messageElement = document.getElementById('usernameMessage');

    if (existingUsernames.includes(username)) {
        messageElement.textContent = '아이디가 이미 존재합니다.';
        messageElement.style.color = 'red';
        isUsernameValid = false;
    } else {
        messageElement.textContent = '사용 가능한 아이디입니다.';
        messageElement.style.color = 'green';
        isUsernameValid = true;
    }
});

// 비밀번호 규칙 확인
document.getElementById('password').addEventListener('input', () => {
    const password = document.getElementById('password').value;
    const passwordMessage = document.getElementById('passwordMessage');
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,16}$/;

    if (!passwordPattern.test(password)) {
        passwordMessage.textContent = '비밀번호가 규칙에 맞지 않습니다.';
        passwordMessage.style.color = 'red';
        isPasswordValid = false;
    } else {
        passwordMessage.textContent = '사용 가능한 비밀번호입니다.';
        passwordMessage.style.color = 'green';
        isPasswordValid = true;
    }
});

// 비밀번호 일치 확인
document.getElementById('confirmPassword').addEventListener('input', () => {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const confirmPasswordMessage = document.getElementById('confirmPasswordMessage');

    if (password !== confirmPassword) {
        confirmPasswordMessage.textContent = '비밀번호가 일치하지 않습니다.';
        confirmPasswordMessage.style.color = 'red';
        isPasswordMatch = false;
    } else {
        confirmPasswordMessage.textContent = '비밀번호가 일치합니다.';
        confirmPasswordMessage.style.color = 'green';
        isPasswordMatch = true;
    }
});

// 비밀번호 보이기/숨기기 기능
document.getElementById('togglePassword').addEventListener('click', () => {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});

document.getElementById('toggleConfirmPassword').addEventListener('click', () => {
    const confirmPasswordInput = document.getElementById('confirmPassword');
    if (confirmPasswordInput.type === 'password') {
        confirmPasswordInput.type = 'text';
    } else {
        confirmPasswordInput.type = 'password';
    }
});

// 회원가입 폼 제출 시 처리
document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();  // 폼 기본 제출 동작을 막음

    // 필드 값 유효성 확인
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const nationality = document.getElementById('nationality').value;

    if (isUsernameValid && isPasswordValid && isPasswordMatch && name && dob && gender && nationality) {
        alert('회원가입이 완료되었습니다.');
    } else {
        alert('모든 정보를 정확히 입력해 주세요.');
    }
});
