<template>
    <div class="info-view career-view clearfix">
        <div class="info col-xs-offset-2 col-xs-8">

            <!--<h2>CAREER</h2>  -->
            <br>
            <h3>We are APAX FAMILY!</h3>

            <p>A leading experiential marketing company in Asia Pacific, headquartered in Shanghai, and has regional offices in Beijing, Xiamen, Hong Kong, India. We focus on the interpretation of brand DNA, solutions, cross border collaborations, global resource integration, diversified brand interaction with three main divisions of
                <br />APAX EVENTS, APAX LIVE and APAX RECREATION. </p>
            <p>We are constantly on the lookout for new employees who excite us and who are excited by us.</p>
            <p>Please send us your resume here at <br>
            eva_gong@apaxgroup.com<br>
            jean_qin@apaxgroup.com</p>
        </div>
        <div class="info row col-xs-offset-2 col-xs-10">
            <div class="col-xs-offset-1 col-xs-10 col-sm-4 col-sm-offset-0">
                <h4>APAX <span class="purple">GROUP</span></h4>
                <h4 class="magnify">Event Planner</h4>
                    <h5>Job responsibilities:</h5>
                <div class="car">
                    Understand and be able to manage the pitch process - working<br>
                    with creative teams for the events concepts；<br>
                    -  Write, illustrate and assemble pitch proposals；<br>
                    -  Script writing skills in creative and video proposal；
                </div>
                <h5 class="Hfive">Job requirements:</h5>
                <div class="car">
                    -2+ years’ relevant planning experience in event marketing or advertising agencies;<br>
                    -Proactive and creative；<br>
                    -Strong research skills and deliver the accurate messages;<br>
                    -Strong ability to effectively prioritize and meet deadlines；<br>
                    -Team-player, critical thinking.<br>
                </div>
            </div>
            <div class="col-xs-offset-1 col-xs-10 col-sm-offset-1 col-sm-5">
                <h4>APAX <span class="purple">GROUP</span></h4>
                <h4 class="magnify">Marketing Manager</h4>
                <h5>Job responsibilities:</h5>
                <div class="car">
                    -  Achieve Yearly Department Expectations;<br>
                    -  Figure out market demands and look for new business opportunities and growth;<br>
                    -  Responsible for marketing strategy design and arrange marketing activities;<br>
                    -  Lead proposal planning, design and production for different clients;<br>
                    -  Develop and maintain key media clients;<br>
                    -  Department operation, team management and development;<br>
                </div>
                <h5 class="Hfive">Job responsibilities:</h5>
                <div class="car">
                    -3 years + related working experience；<br>
                    -Good communication and coordination skill;<br>
                    -Innovative and critical thinking, sensitive information absorption capacity；<br>
                    -With large luxury offline events, 4A advertising company planning experience is preferred.<br>
                </div>
            </div>
        </div>
        <div class="info row col-xs-offset-2 col-xs-10">
            <div class="col-xs-offset-1 col-xs-10 col-sm-4 col-sm-offset-0">
                <h4>APAX <span class="purple">GROUP</span></h4>
                <h4 class="magnify">Event Planner</h4>
                <h5>Senior Coach</h5>
                <div class="car">
                    -Delivery training program for various groups of clients;<br/>
                    -Attend training sessions provided in house or external;<br/>
                    -Mentoring of the coaches;<br/>
                    -Provide in house trainings;<br/>
                    -Designing of training programs and activities;<br/>
                    -Attend to urgent work matters such as guides to prestige guests or recruitment.<br/>
                </div>
                <h5 class="Hfive">Job requirements:</h5>
                <div class="car">
                    -3 years + working experience. 2 years + outdoor recreational activities background;<br>
                    -Very good English skill；<br>-Passionate, sincere, honest, character, cheerful, love youth education;<br>-Active, active working attitude, careful earnest, have high sense of responsibility, <br>-good team spirit, by perseverance and patience.<br>
                </div>
            </div>
            <div class="col-xs-offset-1 col-xs-10 col-sm-offset-1 col-sm-5">
                <h4>APAX <span class="purple">GROUP</span></h4>
                <h4 class="magnify">Program Manager</h4>
                <h5>Job responsibilities:</h5>
                <div class="car">
                    -Responsible for the day to day training;<br>
                    -Effective regulation training program, in a timely manner to manage personnel reflect the training courses for situation;<br>
                    -Handling all kinds of problems in the process of teaching;<br>
                    -Team sports curriculum practice, feedback, teamwork.<br>
                </div>
                <h5 class="Hfive">Job responsibilities:</h5>
                <div class="car">
                    -With high passion with this work<br/>
                    -Fluent Chinese language expression, presentations, and the corresponding expression ability, English spoken language standards;<br/>
                    -Free time is more, love challenge;<br/>
                    -Passionate, sincere, honest, character, cheerful, love youth education;<br/>
                    -Active working attitude, careful earnest, have high sense of responsibility, good team spirit, by perseverance and patience.<br/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'career-view',
    created(){
        this.$bus.$emit('canvas-close');
    },
    mounted(){
        setTimeout(()=> this.$('.career-view').fadeIn(), 500);
    }
}
</script>

<style lang="less">
    .car{
        margin-top: 0 !important;
        font-size: 12px;
    }
    .Hfive{
        margin-top: 37px;
    }
.career-view {
    display: none;
}
.purple{
    color: purple;
}
.magnify{
    font-size: 1.5em!important;
    color: #fff;
}
    h5{
        color:#d1d1d1;
        margin: 0;
        margin-top: 1em;
    }
</style>
