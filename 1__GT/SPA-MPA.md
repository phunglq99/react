# SPA - Single-Page Aplication
- ReactJS là 1 trong những thư viện tạo ra SPA
- Các "Ông lớn" sử dụng SPA: Google, Facebook, Twitter
- Các SPA khác : F8, Shoppe, 30Shine, Chotot, ZingMP3,....

## 2 Phương pháp triển khai Website
- SPA - Single-Page Application
- MPA - Multi-Page Application

-----------------------------------------

# Sự khác biệt

## SPA:
    + Được cho là cách tiếp cận hiện đại hơn
    + Không yêu cầu tải lại trang trong quá trình sử dụng

### MPA:
    + Là cách tiếp cận cổ điển hơn
    + Tải lại trang trong quá trình sử dụng (Click vào đường link, chuyển trang, ....)


-------------------------------------------

# So sánh

## Tốc độ
- SPA nhanh hơn khi sử dụng
    + Phần lớn tài nguyên được tải trong lần đầu
    + Trang chỉ tải thêm dữ liệu mới khi cần

- MPA chậm hơn khi sử dụng
    + Luôn tải lại toàn bộ trang khi truy cập và chuyển hướng

### Bốc tách
- SPA có phần Front-end riêng biệt
- MPA Front-end & Back-end phụ thuộc nhau nhiều hơn được đặt trong cùng 1 dự án


#### SEO
- SPA không thân thiện với SEO như MPA
- Trải nghiệm trên thiết bị di động tốt hơn


##### UX
- SPA cho trải nghiệm tốt hơn, nhất là các thao tác chuyển trang
- Trải nghiệm trên thiết bị di động tốt hơn


###### Quá trình phát triển
- SPA dễ dàng tái sử dụng code, tốn ít công sức hơn (component)
- SPA bốc tách FE & BE 
    + Chia team phát triển song song
    + Phát triển thêm mobile app dễ dàng


###### Phụ thuộc Javascript
- SPA phụ thuộc hoàn toàn vào JS
- MPA có thể không cần JS


###### Performance
- SPA giảm tải cho server khi lượng user truy cập lớn (vì khi render dữ liệu SPA nó đẩy về client làm việc, broswer tự đọc script tự render ra giao diện).

- MPA tăng tải cho server khi lượng user truy cập lớn (vì tất cả request đều gửi lên server nên nó sẽ tăng tải cho server) ,tốn chi cho máy chủ, bỏ ra nhiểu tiền hơn về hạ tầng.

###### Chọn SPA hay MPA ?
- Không có thứ gì luôn hoàn hảo trong mọi trường hợp