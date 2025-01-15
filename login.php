<?php 

session_start();

if (isset($_POST["submit"])) {
    if ($_POST["username"] == "admin" && $_POST["password"] == "123") {
        $_SESSION['login'] = true; // Mengatur sesi login
        header("Location: index.php");
        exit; 
    } else {
        $error = true;
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="login.css">
    <title>Login Invoice</title>
</head>
<body>




    <div class="login-container">
        <div class="login-card">
            <h2>Log in (Firdaus)</h2>
            <form action="login.php" method="POST">
                <div class="input-group">
                    <input type="text" name="username" placeholder="User ID" required>
                    <span class="icon">👤</span>
                </div>
                <div class="input-group">
                    <input type="password" name="password" placeholder="Password" required>
                    <span class="icon">🔑</span>
                </div>
                <button type="submit" name="submit" class="btn" >Masuk</button>
                <a target="_blank" href="https://api.whatsapp.com/send?phone=6285656563250" class="forgot-password">Forgot Password?</a>
            </form>
        </div>
        <?php if (isset($error)) : ?>
        <p style="color: red;">Username atau Password salah</p>
        <?php endif?>
    </div>

    <script>

// dengan kodingan ini user tidak dapat mengklik tombol kiri pada mouse
document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });
    
    </script>
</body>
</html>