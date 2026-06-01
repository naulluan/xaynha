# house.luannguyen.work

Static site nhiều trang, host trên **Cloudflare Pages**, mỗi path là một thư mục.

## Cấu trúc

```
/                 → index.html        (trang chủ, tự liệt kê các path từ site.config.js)
/dutoan           → dutoan/index.html (dự toán xây nhà, lưu số liệu vào trình duyệt)
/3d               → 3d/index.html     (mô hình 3D)
site.config.js    → danh mục các path (trang chủ đọc file này)
_redirects        → alias & chuyển hướng URL cũ
```

URL sạch (không `.html`) là nhờ Cloudflare Pages tự phục vụ `index.html` trong mỗi thư mục.

## Deploy lên Cloudflare Pages

1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Chọn repo `naulluan/xaynha`.
3. Build settings:
   - **Framework preset:** None
   - **Build command:** _(để trống)_
   - **Build output directory:** `/`  (gốc repo)
4. Deploy. Mỗi lần `git push` lên branch chính sẽ tự deploy lại.
5. **Custom domains** → thêm `house.luannguyen.work` → làm theo hướng dẫn DNS (thêm bản ghi CNAME tới `<project>.pages.dev`).

## Thêm một path mới (ví dụ `/vat-lieu`)

1. Tạo thư mục và file: `vat-lieu/index.html`.
2. Thêm một mục vào mảng `PAGES` trong `site.config.js`.
3. `git push`. Trang chủ tự hiện thẻ mới, URL `/vat-lieu` chạy ngay.

Không cần sửa `_redirects` trừ khi muốn alias gõ tắt.

## Lưu dữ liệu (trang Dự toán)

- **Tự động:** mọi thay đổi (diện tích, đơn giá, checklist…) tự lưu vào `localStorage` của trình duyệt, mở lại trang vẫn còn.
- **Xuất JSON:** backup hoặc gửi cho người khác.
- **Nhập JSON:** nạp lại file đã xuất.
- **Reset:** về mặc định và xóa dữ liệu đã lưu.

Dữ liệu nằm trên máy người dùng, không gửi đi đâu.
