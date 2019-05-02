<!-- : Component Form Start : -->
<form action="#" class="form-contact" method="POST">
    <div class="h3">
        <label for="name">Hello! I'm</label>
        <input type="text" id="name" name="name" class="input input-contact__text validate-text" placeholder="Your Name">
        <label for="company">and I represent</label>
        <input type="text" id="company" name="company" class="input input-contact__text validate-text" placeholder="Company name">
        .
    </div>
    <div class="h3">
        <label for="phone">Call me at</label>
        <input type="tel" id="phone" name="phone" class="input input-contact__text validate-phone" placeholder="Your Telephone number">
        <label for="email">or send an email to</label>
        <input type="text" id="email" name="email" class="input input-contact__text validate-mail" placeholder="Your email adress">
        .
    </div>
    <label for="accept" class="checkbox-container-contact h5 reset-marpad validate-checkbox">
        <input type="checkbox" id="accept" name="accept" class="checkbox-container-contact__checkbox accept__trigger">
        <span class="checkbox-container-contact__box fl">
            <i class="checkbox-container-contact__mark fas fa-check"></i>
        </span> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
    </label>
    <div class="block-contact__button block--texcen reset-col">
        <button class="button button-operative ft-homenaje">
            <span class="h4">send details</span>
            <img src="img/right-arrow.svg" alt="Right arrow" class="form-contact__arrow">
        </button>
    </div>
</form>
<!-- : Component Form End : -->