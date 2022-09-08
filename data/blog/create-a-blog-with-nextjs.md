---
title: 使用Next.js建立自己的部落格網站！
date: '2022-09-08'
tags: ['web', 'Next.js']
draft: false
summary:
images: []
---

## 前言

很久以前在學生時期曾經短暫寫過一段時間的部落格，不過因為三分鐘熱度的個性很快就停止更新了。最近因為工作的關係開始接觸很多不同的技術，深深覺得果然還是應該紀錄一下自己的學習過程，不然很多技術在一段時間沒使用之後，記憶就開始逐漸模糊，
甚至每次要用到的時候都還要重新查資料。與其如此，那還不如用自己的文字把所學的知識記錄下來，希望能以此加深自己的記憶，也希望能對其他看到的人有所幫助\~~

[//]: <> (因為上述的緣故回頭檢視了一下自己以前的部落格，想說可以沿用下去來個久違多年的更新。不過現在回頭看之前的文章，不管是內容還是分類方式看起來都有點過於粗糙，而且跟我現在想寫的內容可能差異頗大。如果直接沿用下去接著寫，
總覺得有點疊床架屋的感覺，感覺怪怪的。剛好最近學了一些前端的技術，於是乾脆決定用自己熟悉的技術再重新架一個部落格網站！至於過去寫的內容就讓它留在過去吧~~)

[//]: <> (這次主要使用了 Next.js 來建立這個部落格網站，以下做個簡單的說明跟教學：)

## 使用 Next.js 建立部落格

身為一個選擇困難症患者，在考慮要使用什麼方式來建立部落格的時候猶豫了好一陣子。考慮的對象包括了 [Hexo](https://hexo.io/)，[Hugo](https://gohugo.io/)，[Wordpress](https://wordpress.com/)等，甚至也考慮了像是[ghost.js](https://ghost.org/)這樣的 headless CMS 等等，關於這些不同服務的比較，也許我未來會再寫一篇相關的文章介紹。不過簡而言之，我最後選擇了 [Next.js](https://nextjs.org/)來建立這個部落格。原因有以下幾點：

1. 對外部框架的依賴較少，有比較高的彈性與客製化能力
2. 可以使用前端熱門的 [React](reactjs.org) 語法
3. 除了前端，也可以使用 [API route](https://nextjs.org/docs/api-routes/introduction) 來實作後端功能
4. 可以使用 [Vercel](https://vercel.com/solutions/nextjs) 免費的部署方案，而且部署非常方便
5. 學習 Next.js 的經驗也可以用於未來開發其他網站
6. 自己寫感覺比較酷 QWQ!

不過理所當然的，更高的彈性也就意味著有更多功能都要自己處理，我會選擇這種方式也是因為網站開發也算是我的工作跟興趣之一。

如果不是對網站架設有興趣的人，或者是不想寫程式而只想專注在生產文章的話，使用現有的工具應該會是個更有效率的選擇。個人還滿推薦 [Hexo](https://hexo.io/) 的 [icarus](https://ppoffice.github.io/hexo-theme-icarus/) 主題，或者現成的平台服務像是 [Medium](https://medium.com/) 就很好用了。

## 簡易架設教學

這裡簡單說明一下我的架設流程。

### 取得原始碼

雖然說是自己架設，但是如果完全從零開始的話應該會非常繁瑣 🤣，所以這裡還是借鑒了一下前人在 Github 上面的智慧！這裡我用了 [tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) 這個模板，裡面包含了很多有用的基本功能。使用方式也非常簡單：

1. 打開這個模板的 [Github 頁面](https://github.com/timlrx/tailwind-nextjs-starter-blog) 並點選 「Use this template」(使用這個模板)
2. 這會在你的 Github 帳號底下產生一個相同的專案，之後使用`git clone`下載到你的電腦
3. 在專案資料夾底下執行 `npm install`，安裝所需函式庫

### 在本機執行

1. 安裝完成之後，跟其他的 Next.js 網站一樣，執行`npm run dev`即可在本機上執行並測試。
2. 在瀏覽器網址輸入 `localhost:3000` 就可以看到執行成果。

### 改寫設定檔

在確認執行成功之後，首要的任務自然是修改網站名稱與資訊等設定，讓它變成屬於你的部落格。這裡需要修改的檔案都放在`data`資料夾底下。

1. 修改 siteMetadata.js 裡面的網站基本資訊，像是網站名稱、網址、圖標、電子報、留言服務等資訊。
2. 修改 the content security policy in next.config.js if you want to use any analytics provider or a commenting solution other than giscus.
3. 修改 authors/default.md 裡面的作者資訊
4. 修改 projectsData.js
5. 修改 headerNavLinks.js to customize navigation links

### 內容撰寫

### 部署到 Vercel 上

## 程式架構

## 展望

最後就是希望自己有足夠的熱情跟毅力更新下去！
