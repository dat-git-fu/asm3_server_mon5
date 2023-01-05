const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors');app.use(cors())
app.get('/products',(req,res)=>{
    const test = [
        {
            "_id": {"$oid": "62ccd4665eefc71539bb6b4c"},
            "category": "iphone",
            "img1": "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_13_4.jpeg?alt=media&token=dc72dde3-cfa4-4710-9493-ac2aa0ecf249",
            "img2": "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_13_3.jpeg?alt=media&token=b3417ab8-33b9-4b52-a980-8f9afe4e0896",
            "img3": "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_13_2.jpeg?alt=media&token=74aac3de-0c55-490e-9601-30829de7879f",
            "img4": "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_13_4.jpeg?alt=media&token=dc72dde3-cfa4-4710-9493-ac2aa0ecf249",
            "long_desc": "Tính năng nổi bật \n\n• Màn hình Super Retina XDR 6.7 inch với ProMotion cho cảm giác nhanh nhạy hơn (3)\n\n• Chế độ Điện Ảnh làm tăng thêm độ sâu trường ảnh nông và tự động thay đổi tiêu cự trong video\n\n• Hệ thống camera chuyên nghiệp Telephoto, Wide và Ultra Wide 12MP; LiDAR Scanner; phạm vi thu phóng quang học 6x; chụp ảnh macro; Phong Cách Nhiếp Ảnh, video ProRes (4), HDR thông minh thế hệ 4, chế độ Ban Đêm, Apple ProRAW, khả năng quay video HDR Dolby Vision 4K\n\n• Camera trước TrueDepth 12MP với chế độ Ban Đêm và khả năng quay video HDR Dolby Vision 4K\n\n• Chip A15 Bionic cho hiệu năng thần tốc\n\n• Thời gian xem video lên đến 28 giờ, thời lượng pin dài nhất từng có trên iPhone (2)\n\n• Thiết kế bền bỉ với Ceramic Shield\n\n• Khả năng chống nước đạt chuẩn IP68 đứng đầu thị trường (5)\n\n• Mạng 5G cho tốc độ tải xuống siêu nhanh, xem video và nghe nhạc trực tuyến chất lượng cao (1)\n\n• iOS 15 tích hợp nhiều tính năng mới cho phép bạn làm được nhiều việc hơn bao giờ hết với iPhone (6)..",
            "name": "Apple iPhone 13 Pro Max - Alpine Green",
            "price": "29390000",
            "short_desc": "iPhone 13 Pro Max. Một nâng cấp hệ thống camera chuyên nghiệp hoành tráng chưa từng có. Màn hình Super Retina XDR với ProMotion cho cảm giác nhanh nhạy hơn. Chip A15 Bionic thần tốc. Mạng 5G siêu nhanh.1 Thiết kế bền bỉ và thời lượng pin dài nhất từng có trên iPhone (2).\n\n"
        },
        {
            "_id": {"$oid": "62ccd5755eefc71539bb6b4e"},
            "category": "iphone",
            "img1": "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_2.jpeg?alt=media&token=2e8b6c8e-56fa-4cfd-86c4-9be2ee6205e0",
            "img2": "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_3.jpeg?alt=media&token=84af09ee-ef66-4227-94ef-bcd60c105b74",
            "img3": "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_4.jpeg?alt=media&token=3008fd7b-7c54-460f-bd4e-afd0ba39f57c",
            "img4": "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_11_1.jpeg?alt=media&token=fa286155-0c22-4533-b55a-cc8adc2ad08c",
            "long_desc": "Tính năng nổi bật \n•\tMàn hình Liquid Retina HD LCD 6.1 inch (3)  \n•\tChống nước và chống bụi (chống nước ở độ sâu 2 mét trong vòng tối đa 30 phút, đạt mức IP68) (1) \n•\tHệ thống camera kép 12MP với camera Ultra Wide và Wide; chế độ Ban Đêm, chế độ Chân Dung và video 4K tốc độ tối đa 60fps \n•\tCamera trước TrueDepth 12MP với chế độ Chân Dung, quay video 4K và quay video chậm \n•\tXác thực bảo mật với Face ID \n•\tChip A13 Bionic với Neural Engine thế hệ thứ ba \n•\tKhả năng sạc nhanh\n•\tSạc không dây (4) \n•\tiOS 13 cùng với chế độ Dark Mode, các công cụ chỉnh ảnh và quay video mới, và các tính năng bảo mật hoàn toàn mới ",
            "name": "Apple iPhone 11 64GB",
            "price": "10999000",
            "short_desc": "Quay video 4K, chụp ảnh chân dung tuyệt đẹp và chụp ảnh phong cảnh rộng với hệ thống camera kép hoàn toàn mới. Chụp ảnh tuyệt đẹp trong điều kiện ánh sáng yếu với chế độ Ban Đêm. Xem ảnh, video và chơi game màu sắc chân thực trên màn hình Liquid Retina 6.1 inch (3). Trải nghiệm hiệu năng chưa từng có với chip A13 Bionic cho game, thực tế ảo tăng cường (AR) và chụp ảnh. Làm được nhiều việc hơn và sạc ít hơn với thời lượng pin bền bỉ cả ngày (2). Và bớt phải lo lắng nhờ khả năng chống nước ở độ sâu tối đa 2 mét trong vòng 30 phút (1)."
        },
        {
            "_id": {"$oid": "62ccd6d75eefc71539bb6b50"},
            "category": "iphone",
            "img1": "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_12_3.jpeg?alt=media&token=56832bd5-c510-4760-923c-fae236c6712c",
            "img2": "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_12_2.jpeg?alt=media&token=56f78317-be84-4f2e-a050-6a35f8cba356",
            "img3": "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_12_1.jpeg?alt=media&token=6acaeb5d-1299-4bde-9e60-bee43b49570e",
            "img4": "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_12_4.jpeg?alt=media&token=490d736a-05bd-4242-baf6-8479d9c0d11c",
            "long_desc": "Tính năng nổi bật\n\n• Màn hình Super Retina XDR 6.1 inch1\n\n• Ceramic Shield, chất liệu kính bền chắc nhất từng có trên điện thoại thông minh\n\n• A14 Bionic, chip nhanh nhất từng có trên điện thoại thông minh\n\n• Hệ thống camera kép tiên tiến 12MP với các camera Ultra Wide và Wide; chế độ Ban Đêm, Deep Fusion,\n\nHDR thông minh thế hệ 3, khả năng quay video HDR Dolby Vision 4K\n\n• Camera trước TrueDepth 12MP với chế độ Ban Đêm và khả năng quay video HDR Dolby Vision 4K\n\n• Khả năng chống nước đạt chuẩn IP68 đứng đầu thị trường3\n\n• iOS 14 với các tiện ích được thiết kế lại trên Màn Hình Chính, Thư Viện Ứng Dụng hoàn toàn mới, App\n\nClips cùng nhiều tính năng khác",
            "name": "Apple iPhone 12 64GB",
            "price": "15790000",
            "short_desc": "iPhone 12 đẩy nhanh mọi tác vụ với A14 Bionic, chip nhanh nhất trên điện thoại thông minh. \n\nHệ thống camera kép mới. Với màn hình Super Retina XDR tuyệt đẹp, nay bạn có thể chiêm ngưỡng từng chi tiết hình ảnh vô cùng sống động."
        },
        {
            "_id": {"$oid": "62ccd8b55eefc71539bb6b52"},
            "category": "ipad",
            "img1": "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fipad_gen9_1.jpeg?alt=media&token=507fbf42-b8db-4007-b294-397b95cce7ba",
            "img2": "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fipad_gen9_2.jpeg?alt=media&token=2be93dfc-b78a-4798-8dbf-316405853a6b",
            "img3": "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fipad_gen9_3.jpeg?alt=media&token=6edb581f-6727-4501-9bce-d7f4b806007b",
            "img4": "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fipad_gen9_4.jpeg?alt=media&token=eb62cfc6-f091-46f7-b793-5018bc02d711",
            "long_desc": "Tính năng nổi bật\n•\tMàn hình Retina 10.2 inch sống động với True Tone\n•\tChip A13 Bionic với Neural Engine\n•\tCamera sau Wide 8MP, camera trước Ultra Wide 12MP với tính năng Trung Tâm Màn Hình\n•\tỔ lưu trữ lên tới 256GB\n•\tLoa stereo\n•\tXác thực bảo mật với Touch ID\n•\tWi-Fi 802.11ac và dữ liệu di động LTE chuẩn Gigabit (2)\n•\tThời lượng pin lên tới 10 giờ (3)\n•\tCổng kết nối Lightning để sạc và kết nối phụ kiện\n•\tTương thích với Apple Pencil (thế hệ thứ 1) và Smart Keyboard (1)\n•\tiPadOS 15 sở hữu sức mạnh độc đáo, dễ sử dụng và được thiết kế cho tính đa năng của iPad\n",
            "name": "Apple iPad Gen 9th Wi-Fi 64GB",
            "price": "8990000",
            "short_desc": "Mạnh mẽ. Dễ sử dụng. Đa năng. iPad mới có màn hình Retina tuyệt đẹp, chip A13 Bionic mạnh mẽ, camera trước Ultra Wide có tính năng Trung Tâm Màn Hình, tương thích với Apple Pencil và Smart Keyboard (1). iPad giúp bạn dễ dàng làm được nhiều việc hơn nữa. Tất cả tính năng với mức giá ấn tượng.\n"
        },
        {
            "_id": {"$oid": "62ccd9eb5eefc71539bb6b54"},
            "category": "ipad",
            "img1": "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fipad_air_1.jpeg?alt=media&token=79be0859-23b8-4915-8f92-4bf087ab3186",
            "img2": "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fipad_air_2.jpeg?alt=media&token=e58dc089-ce13-4415-80bd-1b40383591e5",
            "img3": "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fipad_air_3.jpeg?alt=media&token=e6070fc1-f33d-4b2d-a979-71c756978ebf",
            "img4": "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fipad_air_4.jpeg?alt=media&token=92368c98-a863-40c4-9b25-c628e8321e0a",
            "long_desc": "Tính năng nổi bật\n\n•\tMàn hình Liquid Retina 10.9 inch sắc nét với True Tone và dải màu rộng P31\n\n•\tChip A14 Bionic với Neural Engine\n\n•\tXác thực bảo mật với Touch ID\n\n•\tCamera sau 12MP, camera trước FaceTime HD 7MP\n\n•\tHiện có các màu Bạc, Xám Bạc, Hồng Kim, Xanh Lá và Xanh Da Trời\n\n•\tÂm thanh stereo rộng\n\n•\tWi-Fi 6 (802.11ax) và dữ liệu di động LTE Gigabit4\n\n•\tThời lượng pin lên đến 10 giờ3\n\n•\tCổng kết nối USB-C để sạc và kết nối phụ kiện\n\n•\tHỗ trợ Magic Keyboard, Smart Keyboard Folio và Apple Pencil (thế hệ thứ 2)2 \n\n•\tiPadOS 14 mang đến cho bạn các chức năng mới được thiết kế dành riêng cho iPad\n\n",
            "name": "Apple iPad Air 4 10.9 inch Wi-Fi + Cellular 64GB",
            "price": "15990000",
            "short_desc": "iPad Air hoàn toàn mới. Linh hoạt hơn bao giờ hết. Màn hình Liquid Retina 10.9 inch sắc nét với dải màu rộng cho bạn trải nghiệm thị giác vô cùng sống động và chi tiết khi xem ảnh hay video cũng như khi chơi game trên thiết bị.1 Chip A14 Bionic tích hợp công nghệ Neural Engine nổi bật với hiệu năng vận hành mạnh mẽ và các tính năng máy học cao cấp, hỗ trợ tối đa tác vụ biên tập video 4K, soạn tập tin thuyết trình đẹp mắt hay thiết kế mô hình 3D - mọi tác vụ thật dễ dàng. Thiết bị giờ đã hỗ trợ Magic Keyboard và Apple Pencil (thế hệ thứ 2),2 Touch ID nhanh nhạy, dễ sử dụng, bảo mật cao, camera sau 12MP và camera FaceTime HD 7MP, cổng kết nối USB-C hỗ trợ sạc và phụ kiện, thời lượng pin bền bỉ cả ngày,3 công nghệ Wi-Fi 6 và LTE Gigabit cực nhanh.4 Với iPad Air trong tay, bạn được sở hữu một công cụ vô cùng mạnh mẽ, đủ sức hiện thực hóa mọi ý tưởng của bản thân.\n\n"
        },
        {
            "_id": {"$oid": "62ccdb045eefc71539bb6b56"},
            "category": "watch",
            "img1": "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fwatch_1_4.jpeg?alt=media&token=c5642ff3-ec27-4af1-bca2-87a5606f9fee",
            "img2": "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fwatch_1_3.jpeg?alt=media&token=b73a1072-0246-44c9-b694-6686683fe845",
            "img3": "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fwatch_1_2.jpeg?alt=media&token=0eda1185-e2f6-4afc-bad3-4403fc406bfe",
            "img4": "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fwatch_1_1.jpeg?alt=media&token=9d77761d-9008-4002-bdd3-4cfafcde735f",
            "long_desc": "Tính năng nổi bật\n•        Phiên bản GPS cho phép bạn nhận cuộc gọi và trả lời tin nhắn ngay từ cổ tay\n•        Theo dõi nhịp tim bất cứ lúc nào với ứng dụng Nhịp Tim\n•        Nhận thông báo về nhịp tim nhanh và chậm\n•        Màn hình Retina Luôn Bật sáng hơn 2,5 lần lúc ở ngoài trời khi bạn hạ cổ tay xuống\n•        SiP S6 nhanh hơn tới 20 phần trăm so với Series 5\n•        5GHz Wi-Fi và chip U1 Ultra-Wideband\n•        Theo dõi hoạt động hàng ngày của bạn trên Apple Watch và xem xu hướng của bạn trong ứng dụng Thể Dục trên iPhone\n•        Đo lường các hoạt động thể dục của bạn như chạy, đi bộ, đạp xe, tập yoga, bơi lội và khiêu vũ\n•        Thiết kế chống thấm nước khi bơi lội (1)\n•        Đồng bộ nhạc và podcast yêu thích\n•        La bàn được tích hợp sẵn cùng các số đo độ cao theo thời gian thực\n•        Có thể phát hiện nếu bạn bị té ngã mạnh, rồi tự động gọi dịch vụ cứu hộ khẩn cấp giúp bạn\n•        SOS Khẩn Cấp giúp bạn nhận được sự trợ giúp ngay từ cổ tay (2)\n•        watchOS 7 sở hữu tính năng theo dõi giấc ngủ, chỉ đường khi đi xe đạp và mặt đồng hồ có thể tùy chỉnh mới\n•        Vỏ nhôm có thêm nhiều màu mới",
            "name": "Apple Watch Series 6 40mm GPS Sport Band",
            "price": "9090000",
            "short_desc": "Apple Watch Series 6 có thể cảnh báo bạn nếu nhịp tim nhanh hay chậm bất thường, cũng như đo lường nhịp tim hiện tại. Xem các chỉ số tập luyện của bạn trên màn hình Retina Luôn Bật đã được cải tiến sáng hơn 2,5 lần lúc ở ngoài trời khi bạn hạ cổ tay xuống. Thiết lập thói quen đi ngủ và theo dõi giấc ngủ. Trả lời cuộc gọi và tin nhắn ngay từ cổ tay của bạn. Đây là thiết bị tối ưu cho cuộc sống khỏe mạnh hơn, năng động hơn, kết nối nhiều hơn\n\n"
        },
        {
            "_id": {"$oid": "62ccdbb05eefc71539bb6b58"},
            "category": "watch",
            "img1": "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fwatch_2_1.jpeg?alt=media&token=6585e4e6-801a-4b15-9dee-692523cc25f0",
            "img2": "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fwatch_2_2.jpeg?alt=media&token=36a9ed1c-364d-4ef8-8c2f-9a59749ab057",
            "img3": "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fwatch_2_4.jpeg?alt=media&token=680502bd-d359-4095-8b37-841e9fd35a2d",
            "img4": "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fwatch_2_3.jpeg?alt=media&token=223685d5-5fe6-47e4-8ba1-1c6a485c7730",
            "long_desc": "ĐẶC ĐIỂM NỔI BẬT\n- Chức năng màn hình luôn bật giữ cho chức năng xem giờ luôn hoạt động,tiết kiệm pin hơn\n- Thoải mái sử dụng ở hồ bơi hay ngoài trời với chuẩn kháng bụi IP6X ,chống nước đến 50m\n- Đo nhịp tim,oxy trong máu,theo dõi giấc ngủ cùng nhiều tính năng sức khoẻ tích hợp sẵn\n- Trải nghiệm âm nhạc với bộ nhớ trong 32GB cùng khả năng kết nối tai nghe bluetooth\n- Cổng sạc Type C,sạc nhanh 45 phút cho 80% pin",
            "name": "Apple Watch Series 7 41mm GPS Sport Band",
            "price": "10590000",
            "short_desc": "Trải nghiệm hoàn hảo trên màn hình lớn tràn viền\nApple Watch Series 7 sở hữu màn hình lớn hơn tới 20% so với thế hệ Series 6, hơn 50% so với Series 3, nhưng điều đặc biệt là kích thước tổng thể của đồng hồ không hề thay đổi. Để có được kết quả này, đội ngũ kỹ sư của Apple đã thiết kế lại hoàn toàn màn hình giúp giảm tới 40% diện tích phần viền, tạo thành một màn hình tràn viền đầy quyến rũ, nơi bạn xem được nhiều nội dung hơn, hình ảnh hấp dẫn hơn."
        },
        {
            "_id": {"$oid": "62ccdcc95eefc71539bb6b59"},
            "category": "airpod",
            "img1": "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fairpod_1_1.jpeg?alt=media&token=33b2ebdd-086c-4b8e-9241-0b566ca66754",
            "img2": "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fairpod_1_2.jpeg?alt=media&token=b6201728-3058-489e-aa49-df59c4255833",
            "img3": "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fairpod_1_4.jpeg?alt=media&token=cb5d7f1f-03a2-409a-8ee9-1783b37e6b56",
            "img4": "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fairpod_1_3.jpeg?alt=media&token=3c036bd6-b76a-48a7-8cd2-a58290cd1763",
            "long_desc": "Đặc điểm nổi bật\n- Kiểu dáng hiện đại, gọn đẹp, đeo thoải mái đến bất kỳ nơi nào. \n- Âm thanh vòm sống động cùng Spatial audio và chip H1 mạnh mẽ.\n- Kết nối không dây Bluetooth 5.0 mượt mà xa đến 10 m. \n- Điều chỉnh âm thanh phù hợp ống tai của bạn nhờ hỗ trợ Adaptive EQ.\n- Tai nghe cho thời gian nghe nhạc 6 giờ, hộp sạc 24 giờ.\n- Hỗ trợ sạc nhanh, cho thời gian sử dụng 1 giờ chỉ với 5 phút sạc.\n- Hộp sạc hỗ trợ sạc không dây chuẩn Qi, tiện lợi khi sạc lại.\n- Trang bị chuẩn chống nước IPX4, bảo vệ tai nghe an toàn dưới mưa nhỏ và mồ hôi.",
            "name": "Apple AirPods 3rd gen",
            "price": "4390000",
            "short_desc": "Thiết kế sang trọng, nhiều thay đổi so với thế hệ trước\nTai nghe AirPods 3 sở hữu nhiều thiết kế tương tự với thế hệ AirPods Pro tuy nhiên không có phần nút tai. Thiết kế này mang lại cảm giá thoải mái khi sử dụng cho người dùng, phù hợp với đa số kích thước tai. Đặc biệt, thiết kế này thích hợp với người dùng thường xuyên đổ mồ hôi mà không hề gây khó chịu. Phần thân tai cũng được làm ngắn hơn, gọn nhẹ hơn."
        }
    ]
    res.send(test)
})
app.get('/id/:id',(req,res)=>{
    console.log(req.params)
    res.send(req.params.id)
})
app.get('/ha',(req,res)=>{
    res.send('ha')
})


app.listen(5000)