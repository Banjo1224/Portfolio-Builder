<template>
<section class="page-section" id="portfolio">
        <div class="container">
            <div class="text-center">
              <hr>
                <h2 class="section-heading text-uppercase">Portfolio</h2>
            </div>
            <div class="row">
                <div class="col-lg-4 col-sm-6 mb-4">
                    <div class="portfolio-item">
                        <a href="https://github.com/Team-Mohawk/reviewsAPI/blob/master/README.md" target="_blank" rel="noopener noreferrer">
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Systems Design Capstone</div>
                                <!-- <img class="smallEmbed" src="../assets/pics/SDC.png"> -->
                            </div>
                        </a>

                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mb-4">
                    <div class="portfolio-item">
                        <a  href="https://github.com/Team-Torchy/front-end-capstone/blob/master/README.md" target="_blank" rel="noopener noreferrer">
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Front End Capstone</div>
                                <!-- <img class="smallEmbed" src="../assets/pics/FEC.png"> -->
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mb-4">
                    <div class="portfolio-item">
                        <a href="https://github.com/Banjo1224/toy-problems/blob/master/README.md" target="_blank" rel="noopener noreferrer">
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Toy Problems</div>
                                <!-- <img class="smallEmbed" src="../assets/pics/toy_problems.png"> -->
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
export default {
  name: 'Projects'
}
</script>

<style scoped>
  .smallEmbed {
    width: auto;
    height: 200px;
  }
</style>