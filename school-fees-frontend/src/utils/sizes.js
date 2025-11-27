// src/utils/sizes.js

// ค่า padding มาตรฐาน
export const paddings = {
    none: '',
    sm: 'p-4',       // 16px
    md: 'p-6',       // 24px
    lg: 'p-8',       // 32px
    xl: 'p-10'       // 40px
  };
  
  // ค่า margin มาตรฐาน
  export const margins = {
    none: '',
    sm: 'm-4',
    md: 'm-6', 
    lg: 'm-8',
    xl: 'm-10',
    xxl: 'm-20'
  };
  
  // ค่า size ของ components
  export const componentSizes = {
    sm: {
      button: 'px-3 py-2 text-sm',
      input: 'px-3 py-2 text-sm',
      card: 'p-4'
    },
    md: {
      button: 'px-4 py-3 text-base',
      input: 'px-4 py-3 text-base', 
      card: 'p-6'
    },
    lg: {
      button: 'px-6 py-4 text-lg',
      input: 'px-5 py-4 text-lg',
      card: 'p-8'
    }
  };
  
  // ค่า radius (ความโค้ง)
  export const borderRadius = {
    none: 'rounded-none',
    sm: 'rounded',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    full: 'rounded-full'
  };
  
  // ค่า shadow
  export const shadows = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  };
  
  // ส่งออกทั้งหมดเป็น object เดียว
  export default {
    paddings,
    margins,
    componentSizes,
    borderRadius,
    shadows
  };