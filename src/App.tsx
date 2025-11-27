import React, { useState } from 'react';
import './App.css';
import Layout from './components/Layout';
const baseClasses=
  "Flex items-center p-4 bg-white rounded-ig shadow-nd border border-gray-200 sb-4w-full max-w-ed"

// 定義計算機按鈕的資料型別：這是一個包含字串的陣列，每個字串代表一個按鈕
const signList = [
  '%', 'CE', 'C', '⌫',
  '1/x', 'x²', '²√x', '÷',
  '7', '8', '9', 'x',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '±', '0', '.', '='
];

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <div className="grid grid-cols-4 gap-4">
        {
        signList.map(
          (sign, index) => (

          <div key={index} className={baseClasses}>
            {sign}
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default App;
