document.addEventListener("DOMContentLoaded", function () {
    const alphabetText = document.getElementById("alphabetText");
    const alphabetImage = document.getElementById("alphabetImage");
    const rhymeText = document.getElementById("rhymeText");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");

    let currentAlphabetIndex = 0;
    const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    // Array of rhymes corresponding to each alphabet
    const rhymes = [
        { text: "A - Apple", image: "https://healthiersteps.com/wp-content/uploads/2021/12/green-apple-benefits.jpeg" },
        { text: "B - Banana", image: "https://th-thumbnailer.cdn-si-edu.com/xK6NAJHiv_51fzn5sDiQt0eD5Is=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/d5/24/d5243019-e0fc-4b3c-8cdb-48e22f38bff2/istock-183380744.jpg" },
        { text: "C - Carrot", image: "https://thumbs.dreamstime.com/b/carrot-d-render-44927752.jpg" },
        { text: "D - Dolphin", image: "https://www.shutterstock.com/image-vector/cute-dolphin-cartoon-jumping-on-600nw-2266715243.jpg" },
        { text: "E - Elephant", image: "https://cdn.tutsplus.com/cdn-cgi/image/width=630/vector/uploads/2014/02/howtodrawelephants-final.jpg" },
        { text: "F - Flamingo", image: "https://science4fun.info/wp-content/uploads/2017/05/flamingo.jpg" },
        { text: "G - Giraffe", image: "https://img.freepik.com/free-vector/animal-outline-giraffe_1308-34666.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1699228800&semt=ais" },
        { text: "H - Helicopter", image: "https://st.depositphotos.com/1986885/1956/v/450/depositphotos_19561557-stock-illustration-isolated-red-helicopter.jpg" },
        { text: "I - Ice Cream", image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Strawberry_ice_cream_cone_%285076899310%29.jpg" },
        { text: "J - Jellyfish", image: "https://img.apmcdn.org/c1787672b6c72f84a80e2d231a530d8d3d58d4c9/normal/aa9129-20230724-jellyfish-2000.jpg" },
        { text: "K - Kangaroo", image: "https://animalkingdoms.co.nz/cdn/shop/products/Red-Kangaroo.jpg?v=1640422694" },
        { text: "L - Lemon", image: "https://nearlynakedveg.co.uk/cdn/shop/products/Depositphotos_169272482_S_460x@2x.jpg?v=1681411963" },
        { text: "M - Monkey", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg/220px-Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg" },
        { text: "N - Nest", image: "https://img.freepik.com/premium-photo/nest-png-illustration-style_927984-314.jpg" },
        { text: "O - Orange", image: "https://www.quanta.org/orange/orange.jpg" },
        { text: "P - Penguin", image: "https://easydrawingart.com/wp-content/uploads/2019/08/How-to-draw-a-penguin.jpg" },
        { text: "Q - Queen", image: "https://i.pinimg.com/736x/ec/2f/e0/ec2fe0f533a18215440514f45f4ac530.jpg" },
        { text: "R - Rainbow", image: "https://mcprod.discountpartysupplies.com.au/media/catalog/product/r/a/raidecu01_2.jpg?auto=webp&format=pjpg&width=640&height=640&fit=cover" },
        { text: "S - Sunflower", image: "https://easydrawingguides.com/wp-content/uploads/2018/09/Sunflower-10.png" },
        { text: "T - Tiger", image: "https://img.veenaworld.com/wp-content/uploads/2020/07/International-Tiger-Day-How-I-Spotted-Tigers-in-National-Parks-in-India.jpg" },
        { text: "U - Umbrella", image: "https://www.jollybrolly.co.uk/media/catalog/product/cache/08bef4e12c47b0ef0febc6e1f8ffe007/y/e/yel_la-151.jpg" },
        { text: "V - Violin", image: "https://m.media-amazon.com/images/I/71Kxqh0AisL._AC_UF894,1000_QL80_.jpg" },
        { text: "W - Watermelon", image: "https://erewhonappsftp.s3.us-west-2.amazonaws.com/images/233811000-1.png?date=2023-10-1600:43:30.712" },
        { text: "X - Xylophone", image: "https://cdn.tamecajones.com/what_is_a_xylophone.jpg" },
        { text: "Y - Yo-yo", image: "https://community.thriveglobal.com/wp-content/uploads/2020/10/Thrive-global-yoyo.png" },
        { text: "Z - Zebra", image: "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/DCTM_Penguin_UK_DK_AL458223_sjvgvt.jpg" },
    ];

    prevButton.addEventListener("click", function () {
        currentAlphabetIndex = (currentAlphabetIndex - 1 + alphabets.length) % alphabets.length;
        updateRhyme();
    });

    nextButton.addEventListener("click", function () {
        currentAlphabetIndex = (currentAlphabetIndex + 1) % alphabets.length;
        updateRhyme();
    });

    function updateRhyme() {
        const currentAlphabet = alphabets[currentAlphabetIndex];
        const currentRhyme = rhymes[currentAlphabetIndex];

        alphabetText.textContent = currentAlphabet;
        rhymeText.textContent = currentRhyme.text;
        alphabetImage.src = currentRhyme.image;
    }

    // Initial update
    updateRhyme();
});