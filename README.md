[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/wH3jFylN)
# hw4-using-react
This is the starter code of [2023-Programming User Interface Homework](https://hackmd.io/@akairisu/ByGFeGdZh)

## My info

姓名：林首志

學號：R10922088

## deploy的網站連結

[Link](https://rad-sherbet-5d0454.netlify.app/)

## Bonus

無實作任何加分項目。

## 可任意實作的情況下，我設計的行為

### 離開產品詳細資訊頁面又回來時

此時會恢復到預設的選項。

為了實作方便，我將當前選取的選項利用 `useState` hook 紀錄起來。這些狀態是紀錄到詳細資訊頁面對應的 Component ，在離開頁面時，該 Component 會消失，因此離開頁面又回來時，會看到一個全新、使用預設選項的 Component 。

### 關閉網頁又重開時、重新整理頁面

此時所有的狀態都會重置，例如購物車會回到沒有物品的狀態。

我所有的狀態都是使用 `useState` hook 紀錄。（購物車的內容是用最上層的 Component `<App />` 中的 `useState` hook 紀錄。）在關閉網頁又重開時以及重新整理頁面時，所有的 Component 都會重新建立一次，因此所有的狀態都會回到初始狀態。

### 開啟複數網頁時

此時每個網頁的狀態（如購物車）都是獨立的。

同上面所述，我所有的狀態都是使用 `useState` hook紀錄。由於每個頁面的 Component 都是獨立的，每個頁面的狀態也都會是獨立的。

## React 與純 html / css / javascript 的不同

待補。

## 其他有趣之處

### `/details/invalid_index`

在產品詳細資訊頁面裡，我使用 URL param 紀錄當前選取的產品為何。例如 `/details/2` 代表要顯示的是 index 為 2 的產品的詳細資訊。如果給予不合法的參數，例如 `/details/abc` 或是 `/details/12345678` （超出 `shirts` 陣列大小的數字）或是 `/details/00` 等，此時網頁不會出現錯誤，但是會顯示當前的 param 是不合法的。

### `/invalid_path`

任何不合法的 URL ，例如 `/about` ，都會顯示一個沒有 Header 和 Footer 的頁面，並用文字告知當前的路徑不存在。

### 網頁寬度

雖然我沒有實作響應式網頁，但是只要網頁的寬度不要太誇張的小，都不會出現網頁必須橫向滾動才能看到所有內容的情況。大部分元素都會隨著網頁寬度的縮小而自然的調整大小。
