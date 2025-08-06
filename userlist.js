
  const cardsPerPage = 8;
  const userList = document.getElementById("userlist-container");
  const paginationList = document.getElementById("pagination");
  const cards = Array.from(userList.children);
  const totalPages = Math.ceil(cards.length / cardsPerPage);
  let currentPage = 1;

  function showPage(page) {
    const start = (page - 1) * cardsPerPage;
    const end = start + cardsPerPage;

    cards.forEach((card, index) => {
      card.style.display = index >= start && index < end ? "block" : "none";
    });

    document.querySelectorAll(".page-item").forEach((btn, idx) => {
      btn.classList.toggle("active", idx + 1 === page);
    });
  }

  function setupPagination() {
    paginationList.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
      const li = document.createElement("li");
      li.textContent = i;
      li.className = "page-item";
      li.addEventListener("click", () => {
        currentPage = i;
        showPage(i);
      });
      paginationList.appendChild(li);
    }
  }

  setupPagination();
  showPage(currentPage);

