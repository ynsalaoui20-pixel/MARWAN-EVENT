const form = document.getElementById("orderForm");
const ordersList = document.getElementById("ordersList");


// تحميل الطلبات المحفوظة من الهاتف
let orders = JSON.parse(localStorage.getItem("ecoOrders")) || [];


// حفظ الطلبية
form.addEventListener("submit", function(event) {

    event.preventDefault();

    const clientName = document.getElementById("clientName").value;
    const location = document.getElementById("location").value;
    const phone = document.getElementById("phone").value;
    const orderType = document.getElementById("orderType").value;
    const price = document.getElementById("price").value;
    const status = document.getElementById("status").value;
    const notes = document.getElementById("notes").value;

    const now = new Date();

    const date = now.toLocaleDateString("fr-FR");

    const time = now.toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit"
    });


    const order = {

        clientName: clientName,
        location: location,
        phone: phone,
        orderType: orderType,
        price: price,
        status: status,
        notes: notes,
        date: date,
        time: time

    };


    // إضافة الطلبية
    orders.push(order);


    // حفظ جميع الطلبات في الهاتف
    localStorage.setItem(
        "ecoOrders",
        JSON.stringify(orders)
    );


    // عرض الطلبات
    displayOrders();


    // تنظيف الاستمارة
    form.reset();

});


// عرض الطلبات
function displayOrders() {

    ordersList.innerHTML = "";


    orders.forEach(function(order) {

        const div = document.createElement("div");

        div.className = "order";


        div.innerHTML = `

            <h3>
                👤 ${order.clientName}
            </h3>

            <p>
                📍 ${order.location}
            </p>

            <p>
                📞 ${order.phone}
            </p>

            <p>
                📦 ${order.orderType}
            </p>

            <p>
                💰 ${order.price} DH
            </p>

            <p>
                📌 ${order.status}
            </p>

            <p>
                📝 ${order.notes}
            </p>

            <p>
                📅 ${order.date}
            </p>

            <p>
                ⏰ ${order.time}
            </p>
<button onclick="sendWhatsApp('${order.clientName}', '${order.location}', '${order.phone}', '${order.orderType}', '${order.price}', '${order.status}', '${order.notes}', '${order.date}', '${order.time}')">
    📲 Envoyer WhatsApp
</button>
<button onclick="createOrderImage(this)">
    🖼️ Créer l'image
</button>
        `;


        ordersList.appendChild(div);

    });

}


// عرض الطلبات عند فتح التطبيق
displayOrders();
function sendWhatsApp(
    clientName,
    location,
    phone,
    orderType,
    price,
    status,
    notes,
    date,
    time
) {

    const message = `
🔴 ECO LIVREUR
📱 ECO APP

📅 Date : ${date}
⏰ Heure : ${time}

👤 Client : ${clientName}
📍 Lieu : ${location}
📞 Téléphone : ${phone}

📦 Commande : ${orderType}
💰 Prix : ${price} DH

📌 Statut : ${status}

📝 Notes : ${notes || "Aucune"}
`;

    const whatsappNumber = "212680888210";

    const url =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(url, "_blank");
}
function createOrderImage(button) {

    const original = button.closest(".order");

    const clone = original.cloneNode(true);

    // حذف الأزرار من الصورة
    const buttons = clone.querySelectorAll("button");

    buttons.forEach(function(btn) {
        btn.remove();
    });

    // عنوان الصورة
    const header = document.createElement("div");

    header.innerHTML = `
        <img
            src="logo.png"
            style="
                width:100px;
                height:100px;
                object-fit:contain;
                display:block;
                margin:0 auto 10px;
            "
        >

        <h1 style="
            margin:0;
            color:#e00000;
            font-size:28px;
            text-align:center;
            font-family:Arial,sans-serif;
        ">
            ECO LIVREUR
        </h1>

        <p style="
            margin:5px 0 20px;
            text-align:center;
            color:#111;
            font-size:16px;
            font-weight:bold;
            font-family:Arial,sans-serif;
        ">
            ECO APP — COMMANDE
        </p>
    `;

    clone.insertBefore(header, clone.firstChild);

    // تصميم الصورة
    clone.style.width = "600px";
    clone.style.padding = "30px";
    clone.style.background = "#111111";
    clone.style.border = "4px solid #e00000";
    clone.style.borderRadius = "20px";
    clone.style.fontFamily = "Arial, sans-serif";
    clone.style.color = "#f2eeee";

    // إخفاء النسخة مؤقتًا
    clone.style.position = "absolute";
    clone.style.left = "-9999px";
    clone.style.top = "0";

    document.body.appendChild(clone);

    html2canvas(clone, {
        backgroundColor: "#ffffff",
        scale: 2,
        useCORS: true
    }).then(function(canvas) {

        const link = document.createElement("a");

        link.download = "eco-livreur-commande.png";

        link.href = canvas.toDataURL("image/png");

        link.click();

        clone.remove();

    });
}