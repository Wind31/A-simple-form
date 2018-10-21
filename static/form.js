var reset = document.getElementById("reset");
var submit = document.getElementById("submit");

reset.onclick = function () {
    var res = confirm("确定清除所有已填信息吗");
    if (res)
        return true;
    else
        return false;
}
function validate_require(field, alerttxt) {
    if (field.value == null || field.value == "") {
        alert(alerttxt);
        return false;
    }
    else
        return true;
}


submit.onclick = function () {
    var form = document.getElementById("form");
    var pattern = /^[1][3-9]\d{9}$/;
    if (!validate_require(form.name, "您的姓名还没有填哦~")) {
        form.name.focus();
        return false;
    }
    if (!validate_require(form.college, "您的学院还没有填哦~")) {
        form.college.focus();
        return false;
    }
    if (!validate_require(form.phone, "您的手机号码还没有填哦~")) {
        form.phone.focus();
        return false;
    }
    if (!validate_require(form.sex, "请选择您的性别~"))
        return false;
    if (!pattern.test(form.phone.value)) {
        alert("请确认您的手机号是否填写正确");
        form.phone.focus();
        return false;
    }
    var res = confirm("确认提交报名信息吗");
    if (res)
        return true;
    else
        return false;
}
