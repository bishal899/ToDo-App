import "@styles/globals.css";

export const metadeta = {
  title: "ToDo App",
  description: "Add your daily tasks",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        {/* <div>
                <div />
            </div> */}

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
