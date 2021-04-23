
function caculate() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    if (!a || !b || !c) {
      alert("Nhập đầy đủ a, b, c!");
      return;
    }
    if (a == 0) {
      document.getElementById("kq").innerText = "Nhập a > 0";
      return;
    }
    let result = "";
    let delta = b * b - 4 * a * c;
    if (delta > 0) {
      let x1 = ( -b+Math.sqrt(delta)) / (2 * a);
      let x2 = (-b -Math.sqrt(delta)) / (2 * a);
      result = 'Nghiem thu nhat x1 = '+x1+'\n Nghiem thu hai x2 = '+x2;
    } else if (delta == 0) {
      let x = -b / (2 * a);
      result = `Phương trình có 1 nghiệm kép là: x=${x}`;
    } else {
      result = "Phương trình vô nghiệm";
    }
    document.getElementById("kq").innerText = result;
  }