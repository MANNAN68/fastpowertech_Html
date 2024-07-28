(function ($) {
  "use strict";

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".navbar__wrapper").addClass("nav-sticky");
    } else {
      $(".navbar__wrapper").removeClass("nav-sticky");
    }
  });

  //Mobile Nav Hide Show
  if ($(".mobile-menu").length) {
    var mobileMenuContent = $(".user__profile .menu__items").html();
    $(".mobile-menu .menu-box .menu-outer .nav_link").append(mobileMenuContent);

    //Menu Toggle Btn
    $(".mobile-nav-toggler").on("click", function () {
      $("body").addClass("mobile-menu-visible");
    });

    //Menu Toggle Btn
    $(".mobile-menu .menu-backdrop,.mobile-menu .close-btn").on(
      "click",
      function () {
        $("body").removeClass("mobile-menu-visible");
      }
    );
  }
})(jQuery);

//------Custom select box
//------Custom select box
var customSelects = document.querySelectorAll(".custom-select");

customSelects.forEach(function (customSelect) {
  var inputField = customSelect.querySelector("input");
  var optionsList = customSelect.querySelector(".options-list");
  var arrowIcon = customSelect.querySelector(".arrow-icon");
  inputField.addEventListener("click", function () {
    optionsList.classList.toggle("show");
    inputField.classList.toggle("rotate");
  });

  optionsList.addEventListener("click", function (event) {
    var selectedOption = event.target.innerText;
    inputField.value = selectedOption;
    optionsList.classList.remove("show");
    inputField.classList.remove("rotate");
  });

  window.addEventListener("click", function (event) {
    if (!customSelect.contains(event.target)) {
      optionsList.classList.remove("show");
      inputField.classList.remove("rotate");
    }
  });
});

//------End custom select box
//------End custom select box

//------Custom Ajax Search box
//------Custom Ajax Search box

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  searchInput.addEventListener("focus", function () {
    searchResults.style.display = "block";
  });

  searchInput.addEventListener("blur", function () {
    searchResults.style.display = "none";
  });
});
//------End custom Ajax Search box
//------End custom Ajax Search box

//------Custom Ajax Group Search box
//------Custom Ajax Group Search box

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("groupSearchInput");
  const searchResults = document.getElementById("groupSearchResults");

  searchInput.addEventListener("focus", function () {
    searchResults.style.display = "block";
  });

  searchInput.addEventListener("blur", function () {
    searchResults.style.display = "none";
  });
});
//------End custom Ajax Group Search box
//------End custom Ajax Group Search box

//------Custom dropdown menu box
//------Custom dropdown menu box
const custom_dropdown = document.querySelectorAll(".custom-dropdown");

custom_dropdown.forEach(function (customDropdown) {
  const labelField = customDropdown.querySelector("label");
  const optionsList = customDropdown.querySelector(".options-list");
  const arrowIcon = customDropdown.querySelector(".arrow-icon");

  labelField.addEventListener("click", function () {
    optionsList.classList.toggle("show");
    labelField.classList.toggle("rotate");
  });

  optionsList.addEventListener("click", function (event) {
    const selectedOption = event.target.textContent;
    labelField.textContent = selectedOption;
    optionsList.classList.remove("show");
    labelField.classList.remove("rotate");
  });

  window.addEventListener("click", function (event) {
    if (!customDropdown.contains(event.target)) {
      optionsList.classList.remove("show");
      labelField.classList.remove("rotate");
    }
  });
});

//------End custom dropdown menu box
//------End custom dropdown menu box

//------ Custom increment and decrement buttons
//------ Custom increment and decrement buttons
const incrementBtns = document.querySelectorAll(".increment-btn");
const decrementBtns = document.querySelectorAll(".decrement-btn");
incrementBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const input = btn.parentElement.querySelector(".counter-input");
    input.value = parseInt(input.value) + 1;
  });
});

decrementBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const input = btn.parentElement.querySelector(".counter-input");
    if (parseInt(input.value) > 0) {
      input.value = parseInt(input.value) - 1;
    }
  });
});
//------End custom increment and decrement buttons
//------End custom increment and decrement buttons

//----- Custom Multi select option
//----- Custom Multi select option
document.addEventListener("DOMContentLoaded", function () {
  var multiselects = document.querySelectorAll(".multiselect");

  multiselects.forEach(function (multiselect) {
    var label = multiselect.querySelector(".menu-label");
    var toggle = multiselect.querySelector(".menu-toggle");
    var menuList = multiselect.querySelector(".menu-list");

    label.addEventListener("click", function () {
      menuList.style.display =
        menuList.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function (event) {
      var target = event.target;
      if (!multiselect.contains(target)) {
        menuList.style.display = "none";
      }
    });

    var checkboxes = menuList.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener("change", function () {
        updateSelectedItems();
      });
    });

    var menuItems = menuList.querySelectorAll("li");
    menuItems.forEach(function (item) {
      item.addEventListener("click", function (event) {
        var checkbox = event.currentTarget.querySelector(
          'input[type="checkbox"]'
        );
        checkbox.checked = !checkbox.checked;
        checkbox.dispatchEvent(new Event("change"));
      });
    });

    function updateSelectedItems() {
      var selectedItems = [];
      checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
          selectedItems.push(checkbox.value);
        }
      });

      if (selectedItems.length > 0) {
        label.innerHTML = "";
        selectedItems.forEach(function (item) {
          var selectedItem = document.createElement("span");
          selectedItem.classList.add("selected-item");
          selectedItem.textContent = item;

          var closeIcon = document.createElement("span");
          closeIcon.classList.add("close-icon");
          closeIcon.innerHTML = "&times;";
          closeIcon.addEventListener("click", function () {
            var selectedCheckbox = menuList.querySelector(
              'input[value="' + item + '"]'
            );
            selectedCheckbox.checked = false;
            selectedCheckbox.dispatchEvent(new Event("change"));
          });

          selectedItem.appendChild(closeIcon);
          label.appendChild(selectedItem);
        });
      } else {
        label.textContent = "Select Options";
      }
    }
  });
});
//-----End custom Multi select option
//-----End custom Multi select option

//-----Multiple Image Upload
//-----Multiple Image Upload

const uploadContainers = document.querySelectorAll(".upload-container");

uploadContainers.forEach((container) => {
  const dropArea = container.querySelector(".drop-area");
  const dragText = container.querySelector(".drop-text");
  const fileInput = container.querySelector(".file-input");
  const imagePreview = container.querySelector(".image-preview");

  dropArea.onclick = () => {
    fileInput.click();
  };

  dropArea.addEventListener("dragover", handleDragOver);
  dropArea.addEventListener("dragleave", handleDragLeave);
  dropArea.addEventListener("drop", handleDrop);
  fileInput.addEventListener("change", handleFileInputChange);

  function handleDragOver(event) {
    event.preventDefault();
    dropArea.classList.add("highlighted");
    dragText.textContent = "Release to Upload File";
  }

  function handleDragLeave(event) {
    event.preventDefault();
    dropArea.classList.remove("highlighted");
  }

  function handleDrop(event) {
    event.preventDefault();
    dropArea.classList.remove("highlighted");

    const files = event.dataTransfer.files;
    handleFiles(files);
  }

  function handleFileInputChange(event) {
    const files = event.target.files;
    handleFiles(files);
  }

  function handleFiles(files) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = function (event) {
        const imageUrl = event.target.result;
        createImagePreview(imageUrl);
      };

      reader.readAsDataURL(file);
    }
  }

  function createImagePreview(imageUrl) {
    const imageElement = document.createElement("div");
    imageElement.classList.add("image");
    imageElement.style.backgroundImage = `url(${imageUrl})`;

    const closeIcon = document.createElement("span");
    closeIcon.classList.add("close-icon");
    closeIcon.innerHTML = '<img src="../images/img_upload_close.png" >';

    imageElement.appendChild(closeIcon);
    imagePreview.appendChild(imageElement);

    closeIcon.addEventListener("click", function () {
      imagePreview.removeChild(imageElement);
    });
  }
});

//-----End Multiple Image Upload
//-----End Multiple Image Upload

//-----Date Picker
//-----Date Picker
const getDatePickerTitle = (elem) => {
  const label = elem.nextElementSibling;
  let titleText = "";
  if (label && label.tagName === "LABEL") {
    titleText = label.textContent;
  } else {
    titleText = elem.getAttribute("aria-label") || "";
  }
  return titleText;
};

const elems = document.querySelectorAll(".datepicker_input");
for (const elem of elems) {
  const datepicker = new Datepicker(elem, {
    format: "dd/mm/yyyy",
    title: getDatePickerTitle(elem),
  });
}

//-----End Date Picker
//-----End Date Picker

//-----Image Preview onscreen
//-----Image Preview onscreen

const images = document.querySelectorAll(".image");

const imageViewer = document.getElementById("imageViewer");
const closeIcon = document.querySelector(".closeIcon");

function openImageViewer(imageSrc) {
  const selectedImage = document.getElementById("selectedImage");
  selectedImage.src = imageSrc;
  imageViewer.style.display = "block";
}

function closeImageViewer() {
  imageViewer.style.display = "none";
}

images.forEach((image) => {
  image.addEventListener("click", function () {
    const imageSrc = this.getAttribute("src");
    openImageViewer(imageSrc);
  });
});
closeIcon.addEventListener("click", closeImageViewer);
//-----End Image Preview onscreen
//-----End Image Preview onscreen
