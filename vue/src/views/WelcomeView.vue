<script setup>

</script>

<template>
    <div class="welcome-container">
        <div class="flex bg-color justify-end items-start">
            <RouterLink to="/login" class="flex items-center px-5 py-2 m-4 border rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white">
                Login
            </RouterLink>
        </div>
        <div class="m-10 p-10 lg:mt-24 flex flex-col justify-center bg-slate-50/50 rounded-xl">
            <h1 class="text-6xl text-emerald-950">TicketApp</h1>
            <p class="text-2xl mt-10 text-emerald-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, a. Dolor,
                optio deserunt excepturi modi repellendus quisquam id vitae,
                fugiat rerum ipsa inventore officiis distinctio animi iste deleniti amet architecto.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, a. Dolor,
                optio deserunt excepturi modi repellendus quisquam id vitae,
                fugiat rerum ipsa inventore officiis distinctio animi iste deleniti amet architecto.
            </p>
        </div>
    </div>
</template>

<style scoped>
.welcome-container {
    min-width: 100vw;
    min-height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('data:image/svg+xml,<svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M512 600L530 566.7C548 533.3 584 466.7 641 400C698 333.3 776 266.7 722 200C668 133.3 482 66.7 389 33.3L296 0L900 0L900 33.3C900 66.7 900 133.3 900 200C900 266.7 900 333.3 900 400C900 466.7 900 533.3 900 566.7L900 600Z" fill="%23d3eadc"></path><path d="M125 600L198.5 566.7C272 533.3 419 466.7 477.5 400C536 333.3 506 266.7 450.5 200C395 133.3 314 66.7 273.5 33.3L233 0L297 0L390 33.3C483 66.7 669 133.3 723 200C777 266.7 699 333.3 642 400C585 466.7 549 533.3 531 566.7L513 600Z" fill="%23c6e3d0"></path><path d="M17 600L65 566.7C113 533.3 209 466.7 273.5 400C338 333.3 371 266.7 356 200C341 133.3 278 66.7 246.5 33.3L215 0L234 0L274.5 33.3C315 66.7 396 133.3 451.5 200C507 266.7 537 333.3 478.5 400C420 466.7 273 533.3 199.5 566.7L126 600Z" fill="%23baddc5"></path><path d="M0 600L0 566.7C0 533.3 0 466.7 0 400C0 333.3 0 266.7 0 200C0 133.3 0 66.7 0 33.3L0 0L216 0L247.5 33.3C279 66.7 342 133.3 357 200C372 266.7 339 333.3 274.5 400C210 466.7 114 533.3 66 566.7L18 600Z" fill="%23add7ba"></path></svg>');
}
</style>