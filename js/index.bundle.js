!(function () {
  "use strict";
  (function () {
    const e = document.querySelector("#mobile-nav-btn"),
      t = document.querySelector(".mobile-nav"),
      o = document.querySelector(".nav-icon"),
      c = document.querySelectorAll(".mobile-nav a");
    (e.onclick = function () {
      t.classList.toggle("mobile-nav--open"),
        o.classList.toggle("nav-icon--active"),
        document.body.classList.toggle("no-scroll");
    }),
      c.forEach(function (e) {
        e.addEventListener("click", function () {
          o.classList.remove("nav-icon--active"),
            t.classList.remove("mobile-nav--open");
        });
      });
  })(),
    (function () {
      const e = document.querySelectorAll("[data-tab]"),
        t = document.querySelectorAll("[data-tab-value]");
      for (let o of e)
        o.addEventListener("click", function () {
          for (let t of e) t.classList.remove("chip_active");
          this.classList.add("chip_active");
          for (let e of t)
            "all" === this.dataset.tab ||
            e.dataset.tabValue === this.dataset.tab
              ? e.classList.remove("none")
              : e.classList.add("none");
        });
    })(),
    (function () {
      const e = document.querySelectorAll(".form-field");
      for (let t of e) {
        const e = t.closest(".form-item").querySelector(".fake-placeholder");
        t.addEventListener("focus", function () {
          e.classList.add("active");
        }),
          t.addEventListener("blur", function () {
            t.value.length > 0
              ? e.classList.add("active")
              : e.classList.remove("active");
          });
      }
    })(),
    (function () {
      const e = document.querySelector(".dark-mode-btn");
      e.onclick = function () {
        e.classList.toggle("dark-mode-btn--active"),
          document.body.classList.toggle("dark");
      };
    })(),
    $(document).ready(function () {
      $(".contact-form").validate({
        rules: {
          email: { required: !0, email: !0 },
          message: { required: !0 },
        },
        messages: {
          email: { required: "Введите email", email: "отсутсвует символ @" },
          message: { required: "Поле не должно быть пустым" },
        },
        submitHandler: function (e) {
          !(function () {
            let e = $(".contact-form").serialize();
            $.ajax({
              type: "POST",
              url: "php/mail.php",
              data: e,
              success: function (e) {
                $(".contact-form").slideUp(800), $("#answer").html(e);
              },
            });
          })();
        },
      });
    });
})();
