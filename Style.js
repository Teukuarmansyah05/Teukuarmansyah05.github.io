alert("Hello!");
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animasi dengan JavaScript</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f4f4f4;
        }

        .kotak {
            width: 100px;
            height: 100px;
            background-color: #3498db;
            border-radius: 10px;
            position: absolute;
        }
    </style>
</head>
<body>

    <div class="kotak" id="kotak"></div>

    <script>
        const kotak = document.getElementById("kotak");
        let posX = 0;  // Posisi awal kotak
        let keKanan = true;  // Mengatur apakah kotak bergerak ke kanan

        function animasi() {
            // Menentukan arah gerakan kotak
            if (keKanan) {
                posX += 2; // Bergerak ke kanan
            } else {
                posX -= 2; // Bergerak ke kiri
            }

            // Update posisi kotak
            kotak.style.left = posX + 'px';

            // Jika kotak mencapai posisi tertentu, ubah arah
            if (posX >= 300) {
                keKanan = false;  // Arahkan ke kiri
            } else if (posX <= 0) {
                keKanan = true;  // Arahkan ke kanan
            }

            // Panggil kembali fungsi animasi setiap 16ms (~60fps)
            requestAnimationFrame(animasi);
        }

        // Mulai animasi
        animasi();
    </script>

</body>
</html>
