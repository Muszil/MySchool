import React from 'react';
import { FaFileExport, FaFileImport, FaFilter, FaPlus, FaSearch } from 'react-icons/fa';
import Button from './Button';
import Input from './Input';

const ActionBar = ({
  // Event handlers
  onExport,
  onImport,
  onCreateNew,
  onSearch,
  onFilter,
  
  // Values
  searchValue,
  filterValue,
  
  // Labels
  searchPlaceholder = "ค้นหา...",
  filterPlaceholder = "กรอง...",
  exportLabel = "Export",
  importLabel = "Import",
  createNewLabel = "เพิ่มข้อมูล",
  
  // Visibility control
  showExport = true,
  showImport = true,
  showCreateNew = true,
  showSearch = true,
  showFilter = false,
  
  // Custom buttons
  customButtons = [],
  
  // Styling
  primaryColor = "#E587DC",
  hoverColor = "#C34487",
  
  // Layout
  searchWidth = "md:flex-1", // ความกว้างช่องค้นหา
  buttonGap = "gap-3", // ระยะห่างระหว่างปุ่ม
  containerGap = "gap-4", // ระยะห่างระหว่าง search และ buttons
  
  // Custom search icon
  searchIcon = <FaSearch />
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow border border-gray-200 mb-6">
      <div className={`flex flex-col md:flex-row justify-between items-start md:items-center ${containerGap}`}>
        
        {/* Left: Search and Filter */}
        <div className={`w-full ${searchWidth} ${showSearch ? 'md:mr-6' : ''}`}>
          <div className="flex flex-col md:flex-row gap-3">
            {/* Search Input */}
            {showSearch && (
              <div className="relative w-full">
                <Input
                  icon={searchIcon}
                  placeholder={searchPlaceholder}
                  value={searchValue}
                  onChange={(e) => onSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border-gray-300 focus:border-[#8C215D] focus:ring-2 focus:ring-[#8C215D]/20 rounded-lg"
                />
              </div>
            )}
            
            {/* Filter Input */}
            {showFilter && (
              <div className="relative w-full md:w-48">
                <Input
                  icon={<FaFilter />}
                  placeholder={filterPlaceholder}
                  value={filterValue}
                  onChange={(e) => onFilter(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border-gray-300 focus:border-[#8C215D] focus:ring-2 focus:ring-[#8C215D]/20 rounded-lg"
                />
              </div>
            )}
          </div>
        </div>

        {/* Right: Action Buttons */}
        <div className={`flex flex-wrap ${buttonGap}`}>
          {/* Custom buttons (ถ้ามี) */}
          {customButtons.map((button, index) => (
            <Button
              key={index}
              variant={button.variant || "outline"}
              icon={button.icon}
              onClick={button.onClick}
              className={button.className}
              style={button.style}
            >
              {button.label}
            </Button>
          ))}
          
          {/* Default buttons */}
          {showExport && (
            <Button
              variant="outline"
              icon={<FaFileExport />}
              onClick={onExport}
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-4 py-2"
            >
              {exportLabel}
            </Button>
          )}
          
          {showImport && (
            <Button
              variant="outline"
              icon={<FaFileImport />}
              onClick={onImport}
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2"
            >
              {importLabel}
            </Button>
          )}
          
          {showCreateNew && (
            <Button
              variant="primary"
              icon={<FaPlus />}
              onClick={onCreateNew}
              style={{ 
                backgroundColor: primaryColor,
                borderColor: primaryColor
              }}
              className="hover:bg-[#C34487] hover:border-[#C34487] text-white px-4 py-2"
            >
              {createNewLabel}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActionBar;