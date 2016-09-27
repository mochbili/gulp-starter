# gulp
adalah building sistem yang bisa melakukan beberapa tugas, gulp sangat fleksibel

npm install -g gulp = install gulp global

# uglify
minify js code

# sass
compile sass code to css

# watch
watch spesify file for change, and run the task

# default
default task yang running dengan hanya command gulp

# plumber
plumber prevent task stop becuse any error in our project(sass,js,etc)
'Prevent pipe breaking caused by errors from gulp plugins'

# handling error without plumber
.on('error', console.error.bind(error))
handling task error agar tidak keluar dari gulp

# browserSync
jika file di save live reload to browser

# imagemin
digunakan untuk mengcompress images (minify images)

# gulp autoprefixer
untuk membuat prefix dalam browser tanpa harus membuatnya manualy
