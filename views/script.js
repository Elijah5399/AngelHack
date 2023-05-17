const container = document.querySelector("#content");
const initialText = container.innerHTML;

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function home() {
  container.innerHTML = initialText;
}

function about() {}

function help() {}

function contact() {}

function topic1() {
  document.querySelector("#postDistinguisher").setAttribute("value", "1");

  container.innerHTML =
    "<h2><strong>Budgeting</strong></h2>" +
    "<h3>Introduction</h3>" +
    "<p>Hey there, fellow young Singaporeans! Are you ready to take charge of your financial future? Budgeting is a crucial skill that will help you manage your money wisely and achieve your financial goals. In this guide, we'll walk you through the ins and outs of budgeting. So, grab a cup of kopi, find a cozy spot, and let's embark on this exciting journey of financial empowerment!</p>" +
    "<h3>Understanding Your Income</h3>" +
    "<p>The first step in budgeting is gaining a clear understanding of your income. It's not just about your regular paycheck! Consider any part-time jobs, freelance gigs, or side hustles that contribute to your overall earnings. By knowing your total income, you'll be better equipped to plan your budget effectively.</p>" +
    "<h3>Tracking Your Expenses</h3>" +
    "<p>Now, let's talk about expenses—the notorious spending habits that impact our financial well-being. It's essential to track where your hard-earned money goes. There are numerous apps and tools available to simplify expense tracking. For instance:</p>" +
    "<ol>" +
    "<li><a href='https://www.spendee.com/'>Spendee</a>: This intuitive expense tracker allows you to categorize your spending, set budgets, and gain insights into your financial habits. It's like having a personal finance assistant in your pocket!</li>" +
    "<li><a href='https://www.pocketsmith.com/'>PocketSmith</a>: With PocketSmith, you can effortlessly track your expenses, visualize your cash flow, and even forecast future financial scenarios. It's an excellent tool for those who appreciate detailed financial planning.</li>" +
    "</ol>" +
    "<h3>Setting Realistic Goals</h3>" +
    "<p>Budgeting becomes more meaningful and motivating when you have clear goals to work towards. Set both short-term and long-term financial objectives. Here are a few examples:</p>" +
    "<ol>" +
    "<li>Short-term goals: Building an emergency fund, paying off credit card debt, saving for a dream vacation, or purchasing a new gadget.</li>" +
    "<li>Long-term goals: Saving for a down payment on a home, funding your retirement, investing in stocks or real estate, or starting your own business.</li>" +
    "</ol>" +
    "<p>Remember to make your goals SMART—Specific, Measurable, Achievable, Relevant, and Time-bound. This framework will help you stay focused and motivated on your financial journey.</p>" +
    "<h3>Creating Your Budget</h3>" +
    "<p>Now comes the fun part—creating your budget! Begin by allocating a portion of your income to cover essential expenses like rent, groceries, utilities, and transportation. Next, determine how much you want to save and invest towards your financial goals. Finally, set aside an amount for discretionary spending, allowing yourself guilt-free enjoyment. Flexibility is key, so adjust your budget as your circumstances change.</p>" +
    "<h3>Budgeting Tools and Resources</h3>" +
    "<p>To simplify your budgeting journey, explore these alternative tools and resources:</p>" +
    "<ol>" +
    "<li><a href='https://www.youneedabudget.com/'>YNAB (You Need a Budget)</a>: YNAB is a popular budgeting app that focuses on providing a clear understanding of your money and helping you make informed financial decisions.</li>" +
    "<li><a href='https://toshl.com/'>Toshl Finance</a>: Toshl Finance is a feature-rich app that allows you to track expenses, set budgets, and gain insights into your spending habits. It also integrates with various banks, making expense tracking more convenient. With Toshl Finance, you'll have a powerful tool at your fingertips to manage your finances effectively.</li>" +
    "</ol>" +
    "<h3>Conclusion</h3>" +
    "<p>Congratulations on taking the first step towards financial independence and empowerment! By mastering the art of budgeting, you're setting yourself up for a bright financial future. Remember, budgeting is a continuous process that requires discipline and flexibility. Regularly review your budget, track your expenses, and make adjustments as necessary. Explore the recommended tools and resources or find alternatives that suit your preferences. Stay committed, stay focused, and watch your financial goals become a reality. Best of luck on your budgeting journey, young Singaporeans!</p>" +
    "<p>(Note: The provided links are examples and may change or evolve over time. It's always recommended to do your own research and choose the tools and resources that best fit your needs.)</p>";
}

function topic2() {
  document.querySelector("#postDistinguisher").setAttribute("value", "2");
  container.innerHTML = `
    <h2>Understanding Income and Expenses</h2>

    <p>Hey there, young Singaporeans! Are you ready to take control of your personal finances? One of the first steps to financial empowerment is understanding your income and expenses. By gaining clarity about how much money you earn and where it goes, you can make informed decisions and manage your finances wisely. Let's dive into the world of income and expenses and explore some key concepts.</p>

    <h3>Types of Income</h3>

    <p>Income comes in various forms, and it's essential to understand the different sources that contribute to your overall earnings. Here are a few common types of income:</p>

    <ul>
      <li>Salary: This is the most common source of income for many young adults. It's the amount you earn from your job on a regular basis.</li>
      <li>Allowances: If you receive allowances from your parents or guardians, such as for transportation or personal expenses, these also contribute to your income.</li>
      <li>Freelance Earnings: If you engage in freelance work or side gigs, the money you earn from these activities adds to your income. It could be from freelance writing, graphic design, tutoring, or any other skill you have.</li>
    </ul>

    <h3>Managing Expenses</h3>

    <p>Now that we have an understanding of income, let's talk about expenses. Expenses are the costs we incur to meet our needs and wants. It's crucial to manage expenses effectively to ensure that our income covers our financial obligations and goals. Here are some tips for managing expenses:</p>

    <ul>
      <li>Create a Budget: Start by creating a budget that outlines your income and expenses. Allocate your income towards different categories such as rent, groceries, utilities, transportation, and discretionary spending. This will help you prioritize your expenses and ensure that you have enough to cover your needs.</li>
      <li>Track and Categorize Expenses: Keep track of your expenses by recording them regularly. You can use a notebook, a mobile app, or a spreadsheet to track your spending. Categorize your expenses into different categories such as housing, food, transportation, entertainment, and others. This will give you insights into your spending patterns and help you identify areas where you can make adjustments.</li>
      <li>Review and Adjust: Regularly review your expenses and compare them with your budget. Are there any areas where you can cut back or make smarter choices? Adjust your spending habits accordingly to align with your financial goals.</li>
    </ul>

    <p>Understanding your income and managing your expenses are essential steps in taking control of your personal finances. By knowing how much money you earn and where it goes, you can make informed decisions and work towards your financial goals. Stay tuned for more articles on personal finance that will guide you on your journey to financial success. Remember, every small step you take today will have a positive impact on your financial future!</p>

    <p>(Note: The examples and figures used in this article are for illustrative purposes only. Your actual income and expenses may vary. It's important to personalize your financial management based on your individual circumstances.)</p>

    <p>For more information on managing income and expenses, you can check out these helpful resources:</p>

    <ul>
      <li><a href="https://www.investopedia.com/personal-finance/">Investopedia Personal Finance</a>: Learn more about personal finance topics, including income, expenses, budgeting, and more on Investopedia's comprehensive personal finance guides.</li>
      <li><a href="https://www.moneysense.gov.sg/">MoneySense</a>: MoneySense is a Singaporean government initiative that provides a wide range of resources and tools to help you make informed financial decisions. Explore their website for valuable insights on managing your income and expenses.</li>
      <li><a href="https://www.cpf.gov.sg/Members">Central Provident Fund (CPF)</a>: As a Singaporean, understanding how CPF works is crucial. Visit the CPF website to learn about your contributions, withdrawals, and how to optimize your CPF savings.</li>
    </ul>

    <p>By equipping yourself with knowledge and leveraging the available resources, you'll be better prepared to navigate the world of personal finance and achieve your financial goals. Remember, it's never too early to start building a solid foundation for your financial future!</p>

    <p>Stay tuned for more articles on personal finance topics, where we'll delve deeper into budgeting, saving strategies, investing, and more. Your journey to financial success starts now!</p>
  `;
}

function topic3() {
  document.querySelector("#postDistinguisher").setAttribute("value", "3");
  container.innerHTML = `
<h2>The Power of Saving: Building Financial Security</h2>

<p>Welcome, fellow savers! Saving money is a fundamental aspect of personal finance that can pave the way to financial security and help you achieve your long-term goals. In this article, we'll explore the importance of saving and provide you with practical tips to develop a successful saving habit. So, let's dive in and unlock the power of saving!</p>

<h3>Why Saving Matters</h3>

<p>Saving money is not just about setting aside a portion of your income for the future; it's about creating a strong financial foundation that offers you peace of mind and opens up opportunities. Here are a few reasons why saving matters:</p>

<ul>
  <li>Emergency Fund: Life is unpredictable, and unexpected expenses can arise at any time. Having an emergency fund acts as a safety net, providing you with financial security during challenging times.</li>
  <li>Financial Freedom: Saving allows you to break free from living paycheck to paycheck. It gives you the freedom to make choices based on your goals and values rather than being limited by financial constraints.</li>
  <li>Long-Term Goals: Whether you're dreaming of homeownership, starting a business, or planning for retirement, saving is the key to turning those dreams into reality. By consistently saving, you'll make progress towards your long-term goals.</li>
</ul>

<h3>Practical Tips for Saving</h3>

<p>Now that we understand the importance of saving, let's explore some practical tips to help you develop a successful saving habit:</p>

<ul>
  <li>Set Clear Goals: Determine your financial goals and the amount of money you need to save to achieve them. Having specific goals provides clarity and motivation for your saving journey.</li>
  <li>Create a Budget: A budget is a powerful tool that helps you track your income and expenses, identify areas where you can cut back, and allocate money towards savings. Use budgeting apps or spreadsheets to streamline the process.</li>
  <li>Automate Your Savings: Make saving effortless by setting up automatic transfers from your paycheck or checking account to a dedicated savings account. This way, you won't have to rely on willpower alone.</li>
  <li>Reduce Expenses: Look for opportunities to reduce your expenses. Cut back on non-essential items or find more cost-effective alternatives. Small changes can add up over time.</li>
  <li>Increase Your Income: Explore ways to boost your income through side hustles, freelance work, or investing. The extra money can be directed towards savings, accelerating your progress.</li>
  <li>Avoid Impulse Buying: Before making a purchase, pause and evaluate whether it aligns with your priorities and financial goals. Delay gratification and practice mindful spending.</li>
</ul>

<p>Remember, saving is not just a one-time activity; it's a habit that requires consistency and discipline. Start small and gradually increase your savings as your income grows.</p>

<h3>Useful Saving Tools and Resources</h3>

<p>Here are some helpful tools and resources to support your saving journey:</p>

<ul>
  <li><a href="https://www.singlife.com/">Singlife</a>: Singlife is a mobile app that offers a high-interest savings account with no lock-in period. It's a convenient way to grow your savings while earning competitive interest rates.</li>
  <li><a href="https://www.ocbc.com/personal-banking/accounts/360-account">OCBC 360 Account</a>: The OCBC 360 Account is a popular savings account in Singapore that offers attractive interest rates and various bonus interest opportunities. It's worth considering if you're looking for a reliable savings account with added benefits.</li>
  <li><a href="https://sg.finance.yahoo.com/">Yahoo Finance</a>: Stay updated on the latest financial news and market trends with Yahoo Finance. It provides valuable insights and resources to help you make informed decisions about your savings and investments.</li>
  <li><a href="https://www.mas.gov.sg/">Monetary Authority of Singapore (MAS)</a>: The MAS website is a reliable source of information on personal finance and financial literacy. Explore their resources to enhance your understanding of savings, investments, and financial planning.</li>
</ul>

<p>Remember, choosing the right savings tools and resources is essential, as they can help optimize your saving efforts and provide valuable insights. Take the time to research and explore options that align with your financial goals and preferences.</p>

<p>With a solid saving strategy in place, you'll be well on your way to achieving financial security and building a brighter future. Start saving today and unlock the power of financial freedom!</p>

<p>Stay tuned for more articles on personal finance topics, where we'll explore investing, debt management, and strategies for maximizing your savings. Your journey to financial success continues!</p>
`;
}
