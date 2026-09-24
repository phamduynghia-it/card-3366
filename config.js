window.__MOCK_DATA__ = {
    title: `DNLoveGift 🌕🏮 Món Quà Kỷ Niệm Yêu Thương Trăng Rằm`,

    // Dòng chữ hiển thị lúc đang tải trang (Loading)
    loadingText: `Món quà đang đến trong giây lát...`,

    // Nhạc nền (Tải lên file MP3 tùy chọn, hoặc fallback sang CDN)
    music: `./assets/user_music.mp3` || "https://pub-b20e97fa235346679eb882246abe5bed.r2.dev/musics/thangcuoipiano.mp3",

    // Các câu chúc chạy vòng tròn xung quanh trái tim 3D
    messages: ["Luôn xinh đẹp","Chúc bé trung thu vui vẻ","Luôn yêu anh"],

    // Ảnh người yêu / kỉ niệm hiển thị bên trong trái tim 3D
    images: (["./assets/user_images_0.jpg"] && ["./assets/user_images_0.jpg"].length > 0 && ["./assets/user_images_0.jpg"][0]) ? ["./assets/user_images_0.jpg"] : ["./images/mid_autumn_moon_center.png"],

    // Nội dung bức thư hiện ra khi chạm vào phong bì
    letter: {
        title: `Gửi Em - Mùa Trăng Yêu Thương 🌕 🐇`,
        body: `Em à,

Giữa muôn ngàn ánh sao và vầng trăng rằm tháng Tám lung linh, điều đẹp đẽ và quý giá nhất đối với anh chính là nụ cười của em.

Cảm ơn em đã đến bên anh, cùng anh sẻ chia những khoảnh khắc dịu êm và đong đầy ấm áp. Nguyện cầu tình yêu của chúng mình sẽ luôn tròn đầy, sáng trong và rực rỡ như vầng trăng đêm nay.

Chúc người anh yêu một mùa Trung Thu thật ngọt ngào, hạnh phúc và luôn mỉm cười rạng rỡ bên anh nhé! ♥`,
        sender: `Yêu em thật nhiều ♡`
    }
};
