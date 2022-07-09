const scraperObject = {
  url: "https://digitalpcecuador.com/categoria-producto/laptops/",
  async scraper(browser) {
    let page = await browser.newPage();
    console.log(`Navigating to ${this.url}...`);
    await page.goto(this.url);
    // Wait for the required DOM to be rendered
    await page.waitForSelector(".prdlist-content");
    // Get the link to all the required books
    let urls = await page.$$eval("a.product-image", (links) => {
      // Make sure the book to be scraped is in stock
      console.log(links);
      /*links = links.filter(
        (link) =>
          link.querySelector(".product-image > i").textContent !==
          "product-image"
      );
      // Extract the links from the data
      links = links.map((el) => el.querySelector("h3 > a").href);*/
      return links;
    });
    console.log(urls);
  },
};

module.exports = scraperObject;
