# 內容管理說明

本專案使用 YAML 檔案來管理作品集內容。

## 資料夾結構

```
content/
  portfolio/      # 作品集資料夾
    *.yaml        # 每個 YAML 檔案對應一篇作品集
```

## 作品集格式

在 `content/portfolio/` 資料夾中，每個 YAML 檔案對應一篇作品集。檔案名稱（不含副檔名）會自動成為該作品集的 URL slug。

### YAML 檔案範例

```yaml
id: "1"
title: "幾何藝術創作"
category: "3D Art"
tags:
  - "Blender"
  - "3D"
  - "Design"
year: "2024"
imageUrl: "/attached_assets/generated_images/3D_geometric_art_project_31648183.png"
content: |
  # 幾何藝術創作

  這是作品集內容，可以使用 Markdown 語法撰寫。

  ## 創作理念

  - 重點一
  - 重點二

  ### 詳細說明

  這裡可以寫更詳細的內容...
```

### 欄位說明

- `id`: 作品集的唯一識別碼（字串）
- `title`: 作品集標題
- `category`: 分類（例如：Web Design、3D Art、Mobile App 等）
- `tags`: 標籤列表（陣列）
- `year`: 年份（字串）
- `imageUrl`: 封面圖片 URL（必須以 `/attached_assets/` 開頭）
- `content`: 作品集內容（支援 Markdown 語法）

### 重要注意事項

1. **檔案名稱 = URL slug**：YAML 檔案的名稱（不含 `.yaml` 或 `.yml`）會自動成為該作品集的 URL slug。例如：`幾何藝術創作.yaml` 的 URL 會是 `/projects/幾何藝術創作`。

2. **Markdown 支援**：`content` 欄位支援完整的 Markdown 語法，包括：
   - 標題（#、##、###）
   - 列表（有序和無序）
   - 程式碼區塊（```）
   - 粗體、斜體
   - 連結
   - 等等

3. **圖片路徑**：`imageUrl` 必須以 `/attached_assets/` 開頭，圖片檔案應放在 `client/public/attached_assets/` 資料夾中。

## 生成內容

在開發或建置前，需要先執行內容生成腳本：

```bash
npm run content:generate
```

這個腳本會：
1. 讀取 `content/portfolio/` 資料夾中的所有 YAML 檔案
2. 為每個作品集自動生成 `slug`（基於檔案名稱）
3. 驗證圖片 URL 是否正確
4. 將所有作品集合併成一個 JSON 檔案（`client/src/data/content.json`）
5. 按年份和 ID 排序（最新的在前）

## 開發流程

1. 在 `content/portfolio/` 資料夾中新增或編輯 YAML 檔案
2. 執行 `npm run content:generate` 生成內容
3. 執行 `npm run dev` 啟動開發伺服器
4. 在瀏覽器中查看作品集

## 建置流程

執行 `npm run build` 時會自動執行內容生成，無需手動執行。

