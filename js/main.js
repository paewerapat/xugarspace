document.addEventListener("DOMContentLoaded", function () {
    const navbarLogo = document.getElementById("navbar-logo");
    if (navbarLogo) {
        navbarLogo.addEventListener("click", function (e) {
            e.preventDefault();
            window.location.href = "index.html";
        });
    }

    initToggleLanguage()
    initToggleNavbarMenu();
    initProductComparisonCharts();

});

const initToggleLanguage = () => {
    // i18n translations
    const translations = {
        en: {
            "navbar.logo": "XugarSpace",
            "navbar.products": "Products",
            "navbar.solutions": "Solutions",
            "navbar.pricing": "Pricing",
            "navbar.company": "Company",
            "satellite.kanopus-v": "Kanopus-V-IK is an Earth observation satellite with a primary mission of monitoring the environment and managing natural resources. It uses satellite-based imaging systems to support land use planning, monitor environmental changes, and analyze natural resources. The Kanopus-V-IK satellite utilizes multiple imaging modes, such as panchromatic and Multizonal with the capability to capture high-resolution images. This assists in monitoring agricultural areas, tracking land use, exploring water resources, and assessing environmental changes.",
            "satellite.kanopus-v-2A-processing-level": "Set of images obtained by panchromatic and multizonal imaging equipment (2A processing level)",
            "satellite.kanopus-v-2B-2B1-processing-level": "A set of images of 2B and 2B1 processing level (orthorectified panchromatic image with an area resolution of 2.7 m and synthesized RGB+NIR image with an area resolution of 12.5 m)",
            "satellite.kanopus-v-4A-4B-processing-level": "Integrated image 4A or 4B processing level (color image with a resolution of 2.7 m)",
            "satellite.resurs-p": "Resurs-P is an Earth observation satellite designed to monitor the environment, manage natural resources, and track changes across different regions. Equipped with high-resolution imaging technology in both panchromatic and multispectral modes, it captures data across various wavelengths such as visible light, infrared, and near-infrared (NIR). This technology supports agricultural monitoring, environmental assessments, natural resource exploration, and tracking land use changes. It provides high-resolution imagery, including color images at a 1-meter resolution and panchromatic images at up to 0.8 meters, making it highly effective for topographic mapping, land use planning, and environmental monitoring.",
            "satellite.resurs-p-2A-processing-level": "Geoton equipment,set of panchromatic and multispectral images (2A processing level)",
            "satellite.resurs-p-2B-2B1-processing-level": "A set of images of 2B and 2B1 processing level (orthorectified panchromatic image with an area resolution of 0.8 m and synthesized RGB+NIR image with an area resolution of 3.0 m)",
            "satellite.resurs-p-4A-4B-processing-level": "Integrated image processing level 4A or 4B (color image with a resolution of 1.0 m)",
            "satellite.panchromatic-image": "An image captured using light from all colors in the visible light spectrum, which combines red, green, and blue light without separating them into individual colors. This results in a black-and-white image that shows the intensity of light at each point. Panchromatic images have high resolution because they do not require data from multiple color bands, making them ideal for capturing detailed surface features on Earth, such as in geographic surveys, map creation, or monitoring environmental changes. These images are often used in combination with color images to enhance analysis resolution, such as creating high-resolution synthetic color images for more accurate data processing.",
            "satellite.multizonal-image": "An image captured using data from multiple zones or bands that differ, such as the visible light spectrum and infrared. Using this type of image allows for the analysis of surface characteristics across various wavelengths, such as plant health, land use, or environmental assessments. Multizonal images are essential in agriculture, environmental monitoring, and natural resource management.",
            "satellite.orthorectified-panchromatic-image": "A panchromatic image that has been corrected (orthorectification) to reduce distortion caused by capturing images over the Earth's surface. Panchromatic images use a sensor to capture all visible light within the same wavelength range, resulting in black-and-white images. The corrected image has high geographic accuracy, making it suitable for map creation, land surveying, urban planning and geographic analysis.",
            "satellite.synthesized-rgb-nir-image": "An image created by combining data from RGB (red, green, blue) images with near-infrared (NIR) data, producing a composite image that enhances the visibility of various surface features. This is particularly useful for assessing plant health, as the image allows for better differentiation between plants and other surfaces. Synthesized RGB+NIR images are ideal for applications in agriculture, forestry and land use analysis.",
            "satellite.color-image": "A color image is captured using multiple spectral channels (commonly red, green, and blue) to represent colors in a manner closely matching human visual perception. This type of imagery facilitates intuitive and natural interpretation, making it suitable for satellite image presentation, terrain visualization, land change detection, and comprehensive environmental assessments.",
        },
        th: {
            //"navbar.logo": "ซูการ์สเปซ",
            "navbar.products": "สินค้า",
            "navbar.solutions": "โซลูชัน",
            "navbar.pricing": "ราคา",
            "navbar.company": "บริษัท",
            "satellite.kanopus-v": "ดาวเทียม Kanopus-V-IK เป็นดาวเทียมสำหรับสำรวจโลกโดยมีภารกิจหลักในการตรวจสอบสภาพแวดล้อมและการจัดการทรัพยากรธรรมชาติ โดยการใช้ระบบถ่ายภาพจากดาวเทียมซึ่งช่วยในการศึกษาและวางแผนการใช้ที่ดิน การสำรวจการเปลี่ยนแปลงทางสิ่งแวดล้อมและการวิเคราะห์ทรัพยากรธรรมชาติดาวเทียม Kanopus-V-IK ใช้ ระบบถ่ายภาพหลายรูปแบบ เช่น ภาพแพนโครมาติก (Panchromatic) และมัลติโซนอล (Multizonal) โดยมีความสามารถในการจับภาพที่มีความละเอียดสูงเพื่อช่วยในการสำรวจพื้นที่เกษตรกรรม การติดตามการใช้ที่ดิน การสำรวจแหล่งน้ำและการตรวจสอบการเปลี่ยนแปลงของธรรมชาติ",
            "satellite.kanopus-v-2A-processing-level": "ชุดภาพที่ได้จากอุปกรณ์ถ่ายภาพเเพนโครมาติกและมัลติซูนอล (ระดับการประมวลผล 2A)",
            "satellite.kanopus-v-2B-2B1-processing-level": "ชุดภาพที่ประมวลผลระดับ 2B และ 2B1 (ภาพเเพนโครมาติกที่ได้รับการแก้ไขที่มีความละเอียดพื้นที่ 2.7 เมตร และภาพ RGB+NIR ที่มีความละเอียดพื้นที่ 12.5 เมตร)",
            "satellite.kanopus-v-4A-4B-processing-level": "ชุดภาพที่ประมวลผลระดับ 4A หรือ 4B (ภาพสีที่มีความละเอียด 2.7 เมตร)",
            "satellite.resurs-p": "ดาวเทียม Resurs-P เป็นดาวเทียมสำรวจโลกที่มุ่งเน้นการตรวจสอบสภาพแวดล้อม การจัดการทรัพยากรธรรมชาติและการติดตามการเปลี่ยนแปลงของพื้นที่ต่าง ๆ โดยมีเทคโนโลยีการถ่ายภาพที่มีความละเอียดสูงทั้งในรูปแบบแพนโครมาติกและมัลติสเปกตรัม สามารถจับภาพในช่วงคลื่นแสงที่หลากหลาย เช่น แสงที่มองเห็น อินฟราเรดและอินฟราเรดใกล้ (NIR) การใช้เทคโนโลยีนี้ช่วยในการตรวจสอบพื้นที่การเกษตร การประเมินสภาพแวดล้อมและการสำรวจแหล่งทรัพยากรธรรมชาติรวมถึงการตรวจสอบการเปลี่ยนแปลงของพื้นที่ต่าง ๆ บนโลก โดยสามารถให้ข้อมูลที่มีความละเอียดสูง เช่น ภาพสีที่มีความละเอียด 1 เมตร และภาพแพนโครมาติกที่มีความละเอียดสูงถึง 0.8 เมตร ซึ่งสามารถใช้ในการสร้างแผนที่ภูมิประเทศ การวางแผนการใช้ที่ดิน และการตรวจสอบความสมบูรณ์ของสิ่งแวดล้อมได้อย่างมีประสิทธิภาพ",
            "satellite.resurs-p-2A-processing-level": "ชุดภาพพานโครมาติกและมัลติสเปกตรัม (ระดับการประมวลผล 2A)",
            "satellite.resurs-p-2B-2B1-processing-level": "ชุดภาพที่ประมวลผลระดับ 2B และ 2B1 (ภาพเเพนโครมาติกที่ได้รับการแก้ไขที่มีความละเอียดพื้นที่ 0.8 เมตร และภาพ RGB+NIR ที่มีความละเอียดพื้นที่ 3.0 เมตร)",
            "satellite.resurs-p-4A-4B-processing-level": "ชุดภาพการประมวลผลภาพระดับ 4A หรือ 4B (ภาพสีที่มีความละเอียด 1 เมตร)",
            "satellite.panchromatic-image": "ภาพที่ถ่ายโดยใช้แสงจากทุกสีในช่วงคลื่นแสงที่มองเห็นได้ ซึ่งจะรวมแสงสีแดง  เขียวและน้ำเงินโดยไม่แยกออกเป็นสีต่าง ๆ ทำให้ได้ภาพขาวดำที่แสดงความเข้มของแสงในแต่ละจุด โดยภาพแพนโครมาติกจะมีความละเอียดสูงเนื่องจากไม่ต้องใช้ข้อมูลจากสีหลาย ๆ ช่วงคลื่นทำให้เหมาะสำหรับการจับรายละเอียดที่ชัดเจนของพื้นผิวโลก เช่น ในการสำรวจทางภูมิศาสตร์ การสร้างแผนที่หรือการตรวจสอบการเปลี่ยนแปลงของสิ่งแวดล้อม โดยภาพประเภทนี้มักถูกใช้ร่วมกับข้อมูลภาพสีเพื่อเพิ่มความละเอียดในการวิเคราะห์ เช่น การสร้างภาพสีสังเคราะห์ที่มีความละเอียดสูงขึ้นสำหรับการประมวลผลข้อมูลที่แม่นยำยิ่งขึ้น",
            "satellite.multizonal-image": "ภาพที่ถ่ายโดยใช้ข้อมูลจากหลายโซนหรือหลายแถบ (bands) ที่แตกต่างกัน เช่น ช่วงคลื่นแสงที่มองเห็นได้และอินฟราเรด การใช้ภาพประเภทนี้ช่วยให้สามารถวิเคราะห์ลักษณะพื้นผิวจากหลายช่วงคลื่นที่แตกต่างกัน เช่น การตรวจสอบสุขภาพพืช การใช้ที่ดิน หรือการประเมินสภาพแวดล้อม ภาพ Multizonal จึงมีความสำคัญในงานเกษตรกรรม การติดตามสิ่งแวดล้อมและการจัดการทรัพยากรธรรมชาติ",
            "satellite.orthorectified-panchromatic-image": "ภาพแพนโครมาติกที่ได้รับการแก้ไข (orthorectification) เพื่อลดความเบี้ยวเบนจากการถ่ายภาพบนพื้นผิวโลก ภาพแพนโครมาติกจะใช้เซ็นเซอร์ในการจับแสงทั้งหมดที่มองเห็นได้ในช่วงคลื่นเดียวกัน ซึ่งทำให้ภาพเป็นขาวดำ ภาพที่ผ่านการแก้ไขจะมีความแม่นยำทางภูมิศาสตร์สูง จึงเหมาะสำหรับการสร้างแผนที่หรือการสำรวจที่ดิน การวางแผนเมืองและการวิเคราะห์ทางภูมิศาสตร์",
            "satellite.synthesized-rgb-nir-image": "ภาพที่สร้างขึ้นโดยการรวมข้อมูลจากภาพ RGB (สีแดง เขียว น้ำเงิน) กับข้อมูลจากอินฟราเรดใกล้ (NIR) ทำให้ได้ภาพที่แสดงถึงลักษณะต่าง ๆ ของพื้นที่ได้ชัดเจนมากขึ้น โดยเฉพาะในการตรวจสอบสุขภาพของพืช ภาพประเภทนี้จะช่วยให้เห็นความแตกต่างระหว่างพืชและพื้นผิวอื่น ๆ ได้ดีขึ้น เหมาะสำหรับการใช้งานในด้านการเกษตร การป่าไม้และการวิเคราะห์การใช้ที่ดิน",
            "satellite.color-image": "ภาพสี เป็นภาพที่บันทึกโดยใช้ข้อมูลจากหลายช่องสี (เช่น RGB) เพื่อแสดงผลสีใกล้เคียงกับการรับรู้ของตามนุษย์ ภาพชนิดนี้ช่วยให้การตีความข้อมูลมีความเป็นธรรมชาติและเข้าใจได้ง่าย จึงเหมาะสำหรับการนำเสนอภาพถ่ายดาวเทียม การวิเคราะห์สภาพภูมิประเทศ การติดตามการเปลี่ยนแปลงพื้นที่ และการประเมินสภาพแวดล้อมเชิงภาพรวม",
        }
    };

    function setLanguage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        // Save language preference
        localStorage.setItem('lang', lang);
        // Update toggle button text
        const btnToggle = document.getElementById('lang-toggle');
        if (btnToggle) {
            btnToggle.textContent = lang === 'en' ? 'TH' : 'EN';
        }
    }


    // Single toggle button for language switching
    const btnToggle = document.getElementById('lang-toggle');
    if (btnToggle) {
        btnToggle.addEventListener('click', () => {
            const currentLang = localStorage.getItem('lang') || 'en';
            const nextLang = currentLang === 'en' ? 'th' : 'en';
            setLanguage(nextLang);
        });
    }

    // On load, set language from localStorage or default to English
    const savedLang = localStorage.getItem('lang') || 'en';
    setLanguage(savedLang);
}


const initToggleNavbarMenu = () => {
    var hamburger = document.getElementById('navbar-hamburger');
    var menu = document.getElementById('navbar-menu');
    function checkWidth() {
        if (window.innerWidth <= 768) {
            hamburger.style.display = 'flex';
            menu.classList.remove('active');
        } else {
            hamburger.style.display = 'none';
            menu.classList.remove('active');
            menu.style.display = '';
        }
    }
    hamburger.addEventListener('click', function (e) {
        e.stopPropagation();
        // Position menu at lower left of hamburger
        var rect = hamburger.getBoundingClientRect();
        menu.style.top = (rect.bottom + window.scrollY) + 'px';
        menu.style.right = (window.innerWidth - rect.left - rect.width) + 'px';
        menu.classList.toggle('active');
    });
    // Close menu if click outside
    document.addEventListener('click', function (e) {
        if (menu.classList.contains('active')) {
            if (!menu.contains(e.target) && e.target !== hamburger) {
                menu.classList.remove('active');
            }
        }
    });
    // Prevent menu click from closing
    menu.addEventListener('click', function (e) {
        e.stopPropagation();
    });
    window.addEventListener('resize', checkWidth);
    checkWidth();
};


const initProductComparisonCharts = () => {

    // Archive Survey Chart
    const ctx = document.getElementById('archiveSurveyChart').getContext('2d');
    const resolutionLabels = [
        'Resolution : 2 m',
        'Resolution : 1.5 m',
        'Resolution : 50 cm',
        'Resolution : 50 cm',
        'Resolution : 1 m',
        'Resolution : 50 cm',
        'Resolution : 60 cm',
        'Resolution : 50 cm',
        'Resolution : 50 cm'
    ];
    const barColors = [
        '#6dd6e7', '#3db2d3', '#2e8db7', '#2c4c7e', '#7d4c9e', '#d46cae', '#f76c9e', '#ff7b7b', '#3a3a8c'
    ];
    const resolutionLabelPlugin = {
        id: 'resolutionLabelPlugin',
        afterDatasetsDraw(chart) {
            const { ctx, chartArea } = chart;
            if (!chartArea) return;
            ctx.save();
            const meta = chart.getDatasetMeta(0);
            meta.data.forEach((bar, i) => {
                const barX = bar.x;
                const barY = bar.y;
                const resolution = resolutionLabels[i];
                const value = chart.data.datasets[0].data[i];
                // Font sizes
                const resFont = "bold 11px 'Segoe UI', Arial";
                const valFont = "bold 12px 'Segoe UI', Arial";
                // Calculate widths
                ctx.font = resFont;
                const resTextWidth = ctx.measureText(resolution).width;
                ctx.font = valFont;
                const valText = value.toLocaleString();
                const valTextWidth = ctx.measureText(valText).width;
                const maxTextWidth = Math.max(resTextWidth, valTextWidth);
                // Box settings
                const paddingX = 8, radius = 7;
                const boxWidth = maxTextWidth + paddingX * 2;
                const resBoxHeight = 18;
                const gap = 2;
                const boxX = barX - boxWidth / 2;
                const boxY = barY - resBoxHeight - gap - 14;
                // Draw resolution box
                ctx.beginPath();
                ctx.moveTo(boxX + radius, boxY);
                ctx.lineTo(boxX + boxWidth - radius, boxY);
                ctx.quadraticCurveTo(boxX + boxWidth, boxY, boxX + boxWidth, boxY + radius);
                ctx.lineTo(boxX + boxWidth, boxY + resBoxHeight - radius);
                ctx.quadraticCurveTo(boxX + boxWidth, boxY + resBoxHeight, boxX + boxWidth - radius, boxY + resBoxHeight);
                ctx.lineTo(boxX + radius, boxY + resBoxHeight);
                ctx.quadraticCurveTo(boxX, boxY + resBoxHeight, boxX, boxY + resBoxHeight - radius);
                ctx.lineTo(boxX, boxY + radius);
                ctx.quadraticCurveTo(boxX, boxY, boxX + radius, boxY);
                ctx.closePath();
                ctx.fillStyle = barColors[i];
                ctx.shadowColor = "#fff";
                ctx.shadowBlur = 4;
                ctx.fill();
                ctx.shadowBlur = 0;
                // Draw resolution text
                ctx.fillStyle = "#fff";
                ctx.font = resFont;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(resolution, barX, boxY + resBoxHeight / 2);
                // Draw value text (black, no background)
                ctx.font = valFont;
                ctx.fillStyle = "#111";
                ctx.textAlign = "center";
                ctx.textBaseline = "top";
                ctx.fillText(valText, barX, boxY + resBoxHeight + gap);
            });
            ctx.restore();
        }
    };
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                'Kanopus-V', 'SPOT-6/7', 'SKYSAT', 'KOMPSAT-3', 'IKONOS', 'Pléiades', 'QuickBird', 'WorldView-1/2/3', 'Pléiades NEO'
            ],
            datasets: [{
                data: [15.14, 190, 300, 400, 400, 490, 700, 700, 880],
                backgroundColor: [
                    '#6dd6e7', '#3db2d3', '#2e8db7', '#2c4c7e', '#7d4c9e', '#d46cae', '#f76c9e', '#ff7b7b', '#3a3a8c'
                ],
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            plugins: {
                legend: { display: false },
                title: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const resolutions = [
                                'Resolution: 2 m',
                                'Resolution: 1.5 m',
                                'Resolution: 50 cm',
                                'Resolution: 50 cm',
                                'Resolution: 1 m',
                                'Resolution: 50 cm',
                                'Resolution: 60 cm',
                                'Resolution: 50 cm',
                                'Resolution: 50 cm'
                            ];
                            return `${context.dataset.label}: ${context.parsed.y} (\n${resolutions[context.dataIndex]})`;
                        }
                    }
                },
            },
            scales: {
                x: {
                    title: {
                        display: false
                    },
                    ticks: {
                        font: { size: 14 }
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'THB per sq.km',
                        font: { size: 16 }
                    },
                    beginAtZero: true,
                    min: 0,
                    max: 1000,
                    ticks: {
                        font: { size: 14 }
                    }
                }
            }
        },
        plugins: [resolutionLabelPlugin]
    });

    // New Survey Chart
    const ctxNew = document.getElementById('newSurveyChart').getContext('2d');
    const resolutionLabelsNew = [
        'Resolution : 2 m',
        'Resolution : 2 m',
        'Resolution : 2 m',
        'Resolution : 2 m',
        'Resolution : 2 m',
        'Resolution : 2 m',
        'Resolution : 2 m',
        'Resolution : 2 m',
        'Resolution : 2 m'
    ];
    const barColorsNew = [
        '#6dd6e7', '#3db2d3', '#2e8db7', '#2c4c7e', '#7d4c9e', '#d46cae', '#f76c9e', '#ff7b7b', '#3a3a8c'
    ];
    const resolutionLabelPluginNew = {
        id: 'resolutionLabelPlugin',
        afterDatasetsDraw(chart) {
            const { ctx, chartArea } = chart;
            if (!chartArea) return;
            ctx.save();
            const meta = chart.getDatasetMeta(0);
            meta.data.forEach((bar, i) => {
                const barX = bar.x;
                const barY = bar.y;
                const resolution = resolutionLabelsNew[i];
                const value = chart.data.datasets[0].data[i];
                // Font sizes
                const resFont = "bold 11px 'Segoe UI', Arial";
                const valFont = "bold 12px 'Segoe UI', Arial";
                // Calculate widths
                ctx.font = resFont;
                const resTextWidth = ctx.measureText(resolution).width;
                ctx.font = valFont;
                const valText = value.toLocaleString();
                const valTextWidth = ctx.measureText(valText).width;
                const maxTextWidth = Math.max(resTextWidth, valTextWidth);
                // Box settings
                const paddingX = 8, radius = 7;
                const boxWidth = maxTextWidth + paddingX * 2;
                const resBoxHeight = 18;
                const gap = 2;
                const boxX = barX - boxWidth / 2;
                const boxY = barY - resBoxHeight - gap - 14;
                // Draw resolution box
                ctx.beginPath();
                ctx.moveTo(boxX + radius, boxY);
                ctx.lineTo(boxX + boxWidth - radius, boxY);
                ctx.quadraticCurveTo(boxX + boxWidth, boxY, boxX + boxWidth, boxY + radius);
                ctx.lineTo(boxX + boxWidth, boxY + resBoxHeight - radius);
                ctx.quadraticCurveTo(boxX + boxWidth, boxY + resBoxHeight, boxX + boxWidth - radius, boxY + resBoxHeight);
                ctx.lineTo(boxX + radius, boxY + resBoxHeight);
                ctx.quadraticCurveTo(boxX, boxY + resBoxHeight, boxX, boxY + resBoxHeight - radius);
                ctx.lineTo(boxX, boxY + radius);
                ctx.quadraticCurveTo(boxX, boxY, boxX + radius, boxY);
                ctx.closePath();
                ctx.fillStyle = barColorsNew[i];
                ctx.shadowColor = "#fff";
                ctx.shadowBlur = 4;
                ctx.fill();
                ctx.shadowBlur = 0;
                // Draw resolution text
                ctx.fillStyle = "#fff";
                ctx.font = resFont;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(resolution, barX, boxY + resBoxHeight / 2);
                // Draw value text (black, no background)
                ctx.font = valFont;
                ctx.fillStyle = "#111";
                ctx.textAlign = "center";
                ctx.textBaseline = "top";
                ctx.fillText(valText, barX, boxY + resBoxHeight + gap);
            });
            ctx.restore();
        }
    };
    new Chart(ctxNew, {
        type: 'bar',
        data: {
            labels: [
                'Kanopus-V', 'SPOT-6/7', 'SKYSAT', 'KOMPSAT-3', 'IKONOS', 'Pléiades', 'QuickBird'
            ],
            datasets: [{
                data: [31.53, 230, 560, 700, 830, 1100, 1270],
                backgroundColor: [
                    '#6dd6e7', '#3db2d3', '#2e8db7', '#2c4c7e', '#7d4c9e', '#d46cae', '#f76c9e'
                ],
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            plugins: {
                legend: { display: false },
                title: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const resolutions = [
                                'Resolution: 2 m',
                                'Resolution: 2 m',
                                'Resolution: 2 m',
                                'Resolution: 2 m',
                                'Resolution: 2 m',
                                'Resolution: 2 m',
                                'Resolution: 2 m',
                                'Resolution: 2 m',
                                'Resolution: 2 m'
                            ];
                            return `${context.dataset.label}: ${context.parsed.y} (\n${resolutions[context.dataIndex]})`;
                        }
                    }
                },
            },
            scales: {
                x: {
                    title: {
                        display: false
                    },
                    ticks: {
                        font: { size: 14 }
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'THB per sq.km',
                        font: { size: 16 }
                    },
                    beginAtZero: true,
                    min: 0,
                    max: 1400,
                    ticks: {
                        font: { size: 14 }
                    }
                }
            }
        },
        plugins: [resolutionLabelPluginNew]
    });

}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Smooth scroll for scroll indicator
document.addEventListener('DOMContentLoaded', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const satellitesSection = document.querySelector('.satellites-section');
            if (satellitesSection) {
                satellitesSection.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }
        });
    }

    // Language toggle functionality (placeholder)
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            const currentLang = this.textContent;
            if (currentLang === 'EN') {
                this.textContent = 'TH';
                // Add Thai language logic here
            } else {
                this.textContent = 'EN';
                // Add English language logic here
            }
        });
    }

    // Smooth scroll for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add fade-in animation for cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards
    const cards = document.querySelectorAll('.satellite-card, .info-card, .team-member');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});