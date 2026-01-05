import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
app.use(cors());

// ملاحظة: هذا مفتاح تجريبي، يفضل مستقبلاً الحصول على مفتاح خاص بك من OpenWeatherMap
const API_KEY = '71f1dc9b82260c0cba6aaf8a85da66503'; 

app.get('/api/analytics/:city', async (req, res) => {
    try {
        const { city } = req.params;
        
        // تعديل الرابط لضمان جلب البيانات بالدرجة السيليزية
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},IQ&appid=${API_KEY}&units=metric`;
        
        const response = await axios.get(weatherUrl);
        const data = response.data;

        // إرسال البيانات بنجاح
        res.json({
            temp: data.main.temp,
            chartData: [
                data.main.humidity,               // فيضانات (رطوبة)
                Math.floor(Math.random() * 15),   // زلازل (عشوائي مؤقتاً)
                data.wind.speed * 8,              // عواصف (سرعة رياح)
                data.main.temp                    // موجة حر (حرارة)
            ]
        });

    } catch (error) {
        // في حال فشل الـ API، سنرسل بيانات "احتياطية" لكي لا يتوقف الرسم البياني
        console.error("خطأ في API الطقس:", error.message);
        
        res.json({
            temp: 25,
            chartData: [20, 5, 15, 30], // بيانات افتراضية تظهر في الرسم البياني عند تعطل المفتاح
            isDemo: true 
        });
    }
});

app.listen(5000, () => console.log('✅ Server is running on port 5000'));