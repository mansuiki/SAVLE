function Timer(time, className) {

    if (time === "now") {
        var x = setInterval(function () {
            var now = new Date();

            var year = now.getFullYear();
            var month = now.getMonth() + 1;
            var date = now.getDate();
            var hours = now.getHours();
            var minutes = now.getMinutes();
            var seconds = now.getSeconds();

            document.getElementsByClassName(className).item(0).innerHTML = year + "년 " + month + "월 " + date + "일 " + hours + "시 " + minutes + "분 " + seconds + "초 ";

        }, 10);
    } else {

        let ptime = time.split(",");
        var countDownDate = new Date(ptime[0], ptime[1] - 1, ptime[2], ptime[3], ptime[4], ptime[5]).getTime();

        var x = setInterval(function () {
            var result = "";
            var now = new Date().getTime();
            var distance = countDownDate - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            if (days !== 0) {
                result += days + "일 ";
            }
            if (hours !== 0) {
                result += hours + "시간 ";
            }
            if (minutes !== 0) {
                result += minutes + "분 ";
            }
            if (seconds !== 0) {
                result += seconds + "초 ";
            }
            if (distance < 0) {
                clearInterval(x);
                result = "종료되었습니다.";
            }

            document.getElementsByClassName(className).item(0).innerHTML = result
        }, 10);
    }
}