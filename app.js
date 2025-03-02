let splash = document.querySelector(".splash-page");

window.addEventListener("load", fade);

function fade () {
    splash.classList.add("vanish");
}
const practices = {
    "criminal-defense": {
        title: "Criminal Defense",
        image: "./images/criminal-defense.webp",
        description: `<p>In the realm of criminal law, we are dedicated to defending the rights of individuals facing criminal charges. Our approach combines aggressive defense strategies with compassionate client support. We meticulously investigate the circumstances of each case, ensuring that every legal avenue is
        explored. Whether negotiating plea deals or advocating in court, our focus is on achieving the best possible outcome for our clients.</p>
        
        <p>We understand the impact that criminal charges can have on lives and reputations, and we are committed to protecting your rights and pursuing justice on your behalf.</p>
        <h3>1) MISDEMEANORS</h3>
            <p>A misdemeanor is a criminal offense that is generally punishable by less than one year in jail, fines, community service, or probation. These offenses are less serious than felonies but more severe than infractions.</p>
        
            <ul>
                <h3>Examples include:</h3>
                <li>- Simple assault</li>
                <li>- Battery of a Household Member</li>
                <li>- Disorderly Conduct</li>
                <li>- Violation of a Restraining Order</li>
            </ul>
        
            <p>Misdemeanors, while considered less severe than felonies, can still have significant consequences. That is why our goal is to minimize the impact on your life by ensuring we protect your rights and achieve the best possible outcome for your case.</p>
        
        
            <h3>2) FELONIES</h3>
        
            <p>A felony is a serious criminal offense that is punishable by more than one year in prison. Felonies are often categorized by the severity of the offense, and they typically have long-lasting consequences for those convicted.</p>
        
        
            <h3>Examples include:</h3>
            <ul>
                <li>- Drug offenses</li>
        
                <li>- Violent crimes- murder, assault with a deadly weapon, robbery, etc.</li>
        
                <li>- Sexual offenses</li>
        
                <li>- Property Crimes – burglary, arson, etc.</li>
            </ul>
        
            <p>When facing felony charges, the stakes are high. Felony convictions can lead to severe penalties, that can impact you and your family for years to come, which is why it’s critical to have experienced legal representation.</p>
        
        
            <h3>3) DUI</h3>
        
            <p>Our DUI Law practice is dedicated to defending individuals charged with driving under the influence (DUI). We understand that a DUI charge can have serious consequences, including fines, license suspension, and potential jail time.</p>
        
        
            <p>Our team provides robust legal representation at every stage of the process. We thoroughly investigate the circumstances surrounding each case, challenging evidence and questioning the validity of sobriety tests, breathalyzer results, and arrest procedures.</p>
        
        
            <p>We prioritize personalized strategies tailored to your unique situation, whether that involves negotiating favorable plea agreements or advocating for your rights in court. Our goal is to mitigate the impact of DWI charges on your life, protect your driving privileges, and work toward the best possible outcome.</p>
        
        
            <p>With a commitment to excellence and a deep understanding of DWI laws, we are here to guide you through this challenging time.</p>
        
        
            <h3>4) JUVENILE</h3>
        
            <p>Our Juvenile Law practice is dedicated to representing minors in legal matters that affect their lives and futures. We understand that young people can find themselves in challenging situations, and our goal is to provide compassionate, informed advocacy tailored to their unique circumstances.</p>
        
            <p>We handle a range of issues, including delinquency cases, status offenses, and matters related to the juvenile justice system. Our team is committed to ensuring that the rights of juveniles are protected throughout the legal process, from initial hearings to potential rehabilitation options.</p>
        
            <p>We take a holistic approach, emphasizing education, support, and positive outcomes. We work closely with families, schools, and community resources to address the underlying issues that may contribute to a juvenile’s legal challenges.</p>
        
            <p>By prioritizing rehabilitation over punishment, we strive to help young clients navigate their legal issues while focusing on their personal growth and future opportunities. With a deep understanding of juvenile law, we are here to advocate for a brighter future for every young person we represent.</p>`
    },
    "civil-rights": {
        title: "Civil Rights",
        image: "./images/civil-rights.webp",
        description: `<p>Our Civil Rights Law practice is committed to protecting and advocating for the fundamental rights and freedoms guaranteed to individuals by law. We focus on cases involving discrimination, police misconduct, wrongful arrests, and violations of constitutional rights.</p>

        <p>We believe that everyone deserves equal treatment and protection under the law, and we work tirelessly to hold individuals and institutions accountable when those rights are violated. Our approach includes thorough investigations, strategic litigation, and community outreach to raise awareness of civil rights issues.</p>
        
        <p>We represent clients in various contexts, including employment discrimination, housing rights, and freedom of speech cases. By combining legal expertise with a passion for justice, we aim to empower our clients and promote systemic change.</p>
        
        <p>Whether pursuing damages for individual harms or advocating for broader civil rights reforms, our commitment is to ensure that justice is served and that every voice is heard.</p>`
    },
    "civil-disputes": {
        title: "Civil Disputes",
        image: "./images/civil-disputes.webp",
        description: `<p>Civil disputes can arise in many aspects of life, often involving disagreements between individuals, businesses, or organizations. We understand that these conflicts can disrupt your life and livelihood. Our experienced team is here to help you navigate the complexities of civil law, protect your interests, and work toward a fair resolution.</p>

        <p>Civil disputes are legal conflicts that do not involve criminal charges. Instead, they focus on resolving disagreements over rights, responsibilities, and obligations.</p> 
        <h3>Common types of civil disputes include:</h3>
        <ul>
        <li>- Contract Disputes: Breach of contract, disagreements over terms, or non-performance issues</li>
        
        <li>- Property Disputes: Boundary issues, landlord-tenant conflicts, or disputes over ownership</li>
        
        <li>- Personal Injury Claims: Seeking compensation for injuries caused by negligence</li>
        
        <p>Resolving civil disputes requires a combination of legal expertise, strategic thinking, and strong advocacy. We are committed to delivering results while prioritizing your goals. We understand that every case is unique, and we tailor our approach to suit your needs.</p>`
    },
    "guardianship": {
        title: "Guardianship",
        image: "./images/guardianship.avif",
        description: `<p>Our Guardianship Law practice provides comprehensive legal services for individuals seeking to establish guardianship for minors or adults who are unable to care for themselves. We understand that navigating guardianship matters can be emotionally complex and legally challenging, and we are here to guide you every step of the way.</p>

        <p>We assist clients in understanding the legal requirements for guardianship, including the filing of necessary petitions, gathering evidence, and attending court hearings. Our goal is to ensure that the best interests of the individual in need of guardianship are prioritized, whether it’s a child needing a safe and stable environment or adult requiring assistance due to incapacity.</p>

        <p>In addition to establishing guardianship, we also provide representation in matters related to guardianship modification, termination, and disputes between family members. We emphasize clear communication and compassionate support throughout the process, recognizing the sensitive nature of these cases.

        <p>With a commitment to protecting the rights and well-being of those we represent, our Guardianship Law practice strives to provide effective solutions that foster safety, stability, and peace of mind.</p>`
    },
    "divorce-custody": {
        title: "Divorce & Custody",
        image: "./images/divorce-custody.avif",
        description: `<p>Our Divorce Law practice is dedicated to guiding individuals and families through the complexities of divorce with compassion and expertise. We understand that this is a challenging time, and our goal is to provide the support and legal representation necessary to achieve a fair and equitable resolution.</p>

        <p>We handle all aspects of divorce proceedings, including property division, alimony, child custody, and child support. Our approach focuses on understanding your unique circumstances and goals, allowing us to develop tailored strategies that prioritize your interests and those of your children.</p>

        <p>We emphasize negotiation and mediation whenever possible, aiming to reach amicable solutions that minimize conflict and emotional strain. However, we are also prepared to advocate vigorously in court when necessary to protect your rights.</p>

        <p>With a commitment to clear communication and personalized service, we are here to help you navigate the legal process with confidence and achieve the best possible outcome for your future. Whether you are seeking a collaborative divorce or need a strong advocate in litigation, our Divorce Law practice is dedicated to supporting you every step of the way.</p>`
    }
};

// Modal functionality
const modal = document.getElementById("practice-modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeModal = document.getElementById("close-modal");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentPracticeIndex = 0;
const practiceKeys = Object.keys(practices);

function updateModal(practiceKey) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const practice = practices[practiceKey];
    modalImage.src = practice.image;
    modalTitle.textContent = practice.title;
    modalDescription.innerHTML = practice.description;
    modal.style.display = "flex";
    currentPracticeIndex = practiceKeys.indexOf(practiceKey);
}

// document.querySelectorAll(".view-details").forEach((button) => {
//     button.addEventListener("click", () => {
//         updateModal(practiceKeys);
//         modal.style.visibility = "visible";
//     });
// });
document.querySelectorAll(".view-details").forEach((button) => {
    button.addEventListener("click", () => {
        const practiceKey = button.getAttribute("data-practice"); // Get the correct key
        if (practiceKey in practices) {
            updateModal(practiceKey);
            modal.style.visibility = "visible";
        }
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

prevBtn.addEventListener("click", () => {
    currentPracticeIndex = (currentPracticeIndex - 1 + practiceKeys.length) % practiceKeys.length;
    updateModal(practiceKeys[currentPracticeIndex]);
});

nextBtn.addEventListener("click", () => {
    currentPracticeIndex = (currentPracticeIndex + 1) % practiceKeys.length;
    updateModal(practiceKeys[currentPracticeIndex]);
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});