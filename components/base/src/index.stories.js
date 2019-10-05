export default { title: "Button" };

export const simpleButton = () =>
  `<button style="padding: 10px 30px">😀 Another Button</button>`;

export const withText = () => '<button class="btn">Hello Worlds</button>';

// export const withEmoji = () => {
//   const button = document.createElement("button");
//   button.innerText = "😀 😎 👍 💯";
//   return button;
// };

export const story1 = () =>
  `<p>
      <strong>
        This is a fragment of HTML
      </strong>
    </p>`;
story1.story = {
  name: "Simple note",
  parameters: {
    notes: "My notes on some bold text"
  }
};
