const handleClick = () => {
  alert("I got clicked!");
};

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}
