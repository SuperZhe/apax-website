<template>
    <div class="info-view career-view clearfix">
        <div class="info col-xs-offset-1 col-xs-10 col-sm-8 col-sm-offset-2">
            <!--<h2>CAREER</h2>  -->
            <br>
            <h3>{{isch?'WE BELIEVE IN TALENTS':'信任团队 我们卓尔不群\n'}}</h3>

            <p v-if="isch">We believe talent is at the center of everything we do.<br>
                With the best talent in the industry, we promise our clients on the highest quality of planning, creative and execution.<br>
                Our team members grow with our clients and our business partners.
            </p>
            <p v-if="!isch">我们相信人才是创造一切的核心。
                凭借行业内最优秀的人力资源，我们向客户承诺提供最高质量的创意和执行。
                我们的团队与我们的客户及业务伙伴一同不断成长。
            </p>
            <p v-if="isch">We are always looking for creative people of any discipline to join our teams. <br>Find our current vacancies below or feel free to submit a General Application.
            </p>
            <p v-if="!isch">
                我们欢迎一切有识之士的加入，
                请查看职位空缺，或直接将你的简历与工作意向发送邮件申请。
            </p>
            <div class="sendmail">
                <div class="set_6_btn in blue">
                    <a href="mailto:hr@apaxgroup.com" class="email">{{isch?'CONTACT US':'联系我们\n'}}</a>
                    <div class="corners top"></div>
                    <div class="corners bottom"></div>
                </div>
            </div>
        </div>
        <div class="pc">
            <div class="info row col-xs-offset-1 col-xs-10 col-sm-10 col-sm-offset-1">
                <div class="newJob col-xs-10 col-xs-offset-1">
                    <div class="col-xs-offset-1 col-xs-10 col-sm-6 col-sm-offset-0 position">
                        <h4><img src="../assets/img/main/events-title.png" alt="" class="logoThis"></h4>
                        <h4 class="magnify">{{isch?'3D Designer':'3D设计师'}}</h4>
                        <h5>{{isch?'Job responsibilities:':'工作职责：'}}</h5>
                        <div class="car" v-if="isch">
                            According to customer requirements, analyze and plan the demand,<br>
                            complete the 3D effect diagram and construction drawings；<br>
                            Take Advantage of own background and knowledge to effectively control costs in design and production；<br>
                            Good communication with supplier, to control the replay/reconstruction of the site effects；<br>
                            Guide and supervise site construction progress.<br>
                        </div>
                        <div class="car" v-if="!isch">
                              根据客户要求，分析策划需求，完成活动3D效果图和施工图；<br>
                              利用自身的行业背景和知识，在设计和制作上有效的控制成本；<br>
                              与供应商进行良好的沟通，对现场效果还原度进行把控;<br>
                              指导和监察现场施工进度。
                        </div>
                        <h5 class="Hfive">{{isch?'Job requirements:':'任职要求：'}}</h5>
                        <div class="car" v-if="isch">
                            College degree or above in art, good art skill, good understanding of creative concept；<br>
                            Strong learning ability, 2+ years working experience in the same industry；<br>
                            Good skill in CAD；Draw the suitable construction drawings according to 3D documents；<br>
                            Relevant working experience in interior design or related experience,<br> familiar with construction technology and size；<br>
                            Proficient in 3D design, to design the proper 3D scene according to the creative concept；<br>
                            Basic operation ability for PHOTOSHOP and illustrator software；<br>
                            Be familiar with the site construction, guide and supervise project progress,<br> organize construction, be familiar with material and process structure is preferred;<br>
                            Independent design for international brand activities or booth is preferred；<br>
                            Relevant experience in 4A company or event PR company is preferred.<br>
                        </div>
                        <div class="car" v-if="!isch">
                            -  艺术相关专业大专以上学历，良好的美术功底，对创意概念的领悟性强；<br>
                            -  具备较强的学习能力，2年以上同行业工作经验；<br>
                            -  熟练使用CAD, 能根据3D文件放样出合适的施工图；<br>
                            -  具有室内设计经历或相关经验，熟悉施工工艺和施工尺寸；<br>
                            -  精通3D设计，能根据创意概念设计出合适的3D场景；<br>
                            -  对Photoshop、illustrator 软件有最基本操作能力；<br>
                            -  熟悉现场施工，指导和监察工程进度，组织搭建，熟悉材料和工艺结构的设计师优先；<br>
                            -  有为国际品牌活动或展台做独立设计的设计师优先；<br>
                            -  有4A公司或活动公关公司服务经验者优先。

                        </div>
                    </div>
                    <div class="col-xs-offset-1 col-xs-10 col-sm-offset-0 col-sm-6 position">
                        <h4><img src="../assets/img/main/events-title.png" alt="" class="logoThis"></h4>
                        <h4 class="magnify">{{isch?'Senior Project Executive':'资深项目执行'}}</h4>
                        <h5>{{isch?'Job responsibilities:':'工作职责：'}}</h5>
                        <div class="car" v-if="isch">
                            Maintain good communication with customers to ensure the events go smoothly；<br>
                            Responsible for pre-activity purchasing, supplier contact and other preparatory work；<br>
                            Understand and analyze customer requirements to achieve the required results；<br>
                            Good cost management, supplier management and full support for the event projects；<br>
                            Summarize the projects in time, organize and save the related documents and data.<br>
                        </div>
                        <div class="car" v-if="!isch">
                            -  保持与客户的良好沟通，以确保项目执行的顺利进行；<br>
                            -  负责活动前采购、供应商联系等前期准备工作；<br>
                            -  理解并分析客户需求，以达到客户所需效果；<br>
                            -  做好成本管理，供应商管理并对项目活动提供全方位支持；<br>
                            -  及时进行项目总结，整理保存项目文件及数据。<br>
                        </div>
                        <h5 class="Hfive">{{isch?'Job requirements:':'任职要求：'}}</h5>
                        <div class="car" v-if="isch">
                            3+ years’ relevant project executive (in Online or offline advertising agencies is preferred)；<br>
                            Project executive and customer service experience；<br>
                            Strong communication skills in both Chinese and English；<br>
                            Proficiency office software: word /excel/PowerPoint, etc.；<br>
                            Ability to handle complex tasks independently；<br>
                            Strong logical thinking ability and good language ability；<br>
                            Good physical and hardworking spirit；<br>
                            Good coordination and organizational skills, teamwork spirit；<br>
                            Responsibility, work well under pressure.<br>
                        </div>
                        <div class="car" v-if="!isch">
                            -  3年以上项目执行相关工作经验（线上或线下广告公司为佳）；<br>
                            -  项目实施执行、客户服务经验；<br>
                            -  较强的中英文沟通能力；<br>
                            -  熟练的操作office软件：word /excel/PowerPoint等；<br>
                            -  具有独立处理、解决复杂任务的能力；<br>
                            -  较强的逻辑思维能力，良好的语言表达能力；<br>
                            -  具备良好的身体素质和吃苦耐劳精神；<br>
                            -  具有良好的协调组织能力，团队合作精神；<br>
                            -  有责任心，较强的抗压能力。
                        </div>
                    </div>
                </div>
                <div class="newJob col-xs-10 col-xs-offset-1">
                    <div class="col-xs-offset-1 col-xs-10 col-sm-6 col-sm-offset-0 position">
                        <h4><img src="../assets/img/main/events-title.png" alt="" class="logoThis"></h4>
                        <h4 class="magnify">{{isch?'Event Planner':'活动策划'}}</h4>
                        <h5>{{isch?'Job responsibilities:':'工作职责：'}}</h5>
                        <div class="car" v-if="isch">
                            Understand and be able to manage the pitch process - working<br>
                            with creative teams for the events concepts；<br>
                            -  Write, illustrate and assemble pitch proposals；<br>
                            -  Script writing skills in creative and video proposal；
                        </div>
                        <div class="car" v-if="!isch">
                            -  与创意团队一起探讨活动的概念并管理比稿进程； <br>
                            -  收集并撰写比稿方案;<br>
                            -  提供创意并且撰写视频方案。
                        </div>
                        <h5 class="Hfive">{{isch?'Job requirements:':'任职要求：'}}</h5>
                        <div class="car" v-if="isch">
                            -2+ years’ relevant planning experience in event marketing or advertising agencies;<br>
                            -Proactive and creative；<br>
                            -Strong research skills and deliver the accurate messages;<br>
                            -Strong ability to effectively prioritize and meet deadlines；<br>
                            -Team-player, critical thinking.<br>
                        </div>
                        <div class="car" v-if="!isch">
                            -  2年以上相关活动营销或广告公司工作经验；<br>
                            -  逻辑性好，积极主动，有创意地形成观点；<br>
                            -  有较强的研究能力，以确保所有文案是正确及精确的；<br>
                            -  有较强的执行力，有效得安排工作，能在规定时间内完成任务；<br>
                            -  善于团队合作。

                        </div>
                    </div>
                    <div class="col-xs-offset-1 col-xs-10 col-sm-offset-0 col-sm-6 position">
                        <h4><img src="../assets/img/main/live-title.png" alt="" class="logoThis"></h4>
                        <h4 class="magnify">{{isch?'Marketing Manager':'市场经理'}}</h4>
                        <h5>{{isch?'Job responsibilities:':'工作职责：'}}</h5>
                        <div class="car" v-if="isch">
                            -  Achieve Yearly Department Expectations;<br>
                            -  Figure out market demands and look for new business opportunities and growth;<br>
                            -  Responsible for marketing strategy design and arrange marketing activities;<br>
                            -  Lead proposal planning, design and production for different clients;<br>
                            -  Develop and maintain key media clients;<br>
                            -  Department operation, team management and development;<br>
                        </div>
                        <div class="car" v-if="!isch">
                            -  实现部门年度目标； <br>
                            -  解决市场需求以及寻求新的业务增长点；<br>
                            -  负责市场营销策略的设计和安排营销活动； <br>
                            -  针对不同客户（媒体），对提案进行规划，设计及生成；<br>
                            -  开发及维护主要媒体客户；<br>
                            -  负责部门运作，团队管理及发展。
                        </div>
                        <h5 class="Hfive">{{isch?'Job requirements:':'任职要求：'}}</h5>
                        <div class="car" v-if="isch">
                            -3 years + related working experience；<br>
                            -Good communication and coordination skill;<br>
                            -Innovative and critical thinking, sensitive information absorption capacity；<br>
                            -With large luxury offline events, 4A advertising company planning experience is preferred.<br>
                        </div>
                        <div class="car" v-if="!isch">
                            -  3年以上相关工作经验；<br>
                            -  有良好的沟通及协调能力；<br>
                            -  创新思维，有较高的信息敏感性；<br>
                            -  有大型奢侈品线下活动，4A广告公司策划经验者优先。<br>
                        </div>
                    </div>
                </div>
                <div class="newJob col-xs-10 col-xs-offset-1">
                    <div class="col-xs-offset-1 col-xs-10 col-sm-6 col-sm-offset-0 position">
                        <h4><img src="../assets/img/main/recreation-title.png" alt="" class="logoThis"></h4>
                        <h4 class="magnify">{{isch?'Senior Coach':'资深教练'}}</h4>
                        <h5>{{isch?'Job responsibilities:':'工作职责：'}}</h5>
                        <div class="car" v-if="isch">
                            -Delivery training program for various groups of clients;<br/>
                            -Attend training sessions provided in house or external;<br/>
                            -Mentoring of the coaches;<br/>
                            -Provide in house trainings;<br/>
                            -Designing of training programs and activities;<br/>
                            -Attend to urgent work matters such as guides to prestige guests or recruitment.<br/>
                        </div>
                        <div class="car" v-if="!isch">
                            -  为各类客户提供培训课程； <br/>
                            -  参加内外部培训；<br/>
                            -  指导初级教练； <br/>
                            -  提供内部训练；<br/>
                            -  设计课程及活动；<br/>
                            -  参与紧急工作，例如重要客户的接待或招聘事宜。
                        </div>
                        <h5 class="Hfive">{{isch?'Job requirements:':'任职要求：'}}</h5>
                        <div class="car" v-if="isch">
                            -3 years + working experience. 2 years + outdoor recreational activities background;<br>
                            -Very good English skill；<br>-Passionate, sincere, honest, character, cheerful, love youth education;<br>-Active, active working attitude, careful earnest, have high sense of responsibility, <br>-good team spirit, by perseverance and patience.<br>
                        </div>
                        <div class="car" v-if="!isch">
                            -  3年以上相关工作经验，2年以上户外运动背景；<br>
                            -  精通英语；<br>
                            -  热情、真诚、诚实、性格开朗、热爱青年教育；<br>
                            -  思维活跃、工作积极主动、仔细认真、责任心强；<br>
                            -  良好的团队精神，有毅力和耐心。
                        </div>
                    </div>
                    <div class="col-xs-offset-1 col-xs-10 col-sm-offset-0 col-sm-6 position">
                        <h4><img src="../assets/img/main/recreation-title.png" alt="" class="logoThis"></h4>
                        <h4 class="magnify">{{isch?'Program Manager':'课程经理'}}</h4>
                        <h5>{{isch?'Job responsibilities:':'工作职责：'}}</h5>
                        <div class="car" v-if="isch">
                            -Responsible for the day to day training;<br>
                            -Effective regulation training program, <br>in a timely manner to manage personnel reflect the training courses for situation;<br>
                            -Handling all kinds of problems in the process of teaching;<br>
                            -Team sports curriculum practice, feedback, teamwork.<br>
                        </div>
                        <div class="car" v-if="!isch">
                            -  负责日常培训； <br>
                            -  有效监管培训课程，及时了解客户对于课程的反馈；<br>
                            -  在教学过程中处理各种问题； <br>
                            -  团队运动课程的亲身实践，并给予反馈。
                        </div>
                        <h5 class="Hfive">{{isch?'Job requirements:':'任职要求：'}}</h5>
                        <div class="car" v-if="isch">
                            -With high passion with this work<br/>
                            -Fluent Chinese language expression, presentations,<br>
                            and the corresponding expression ability, English spoken language standards;<br/>
                            -Free time is more, love challenge;<br/>
                            -Passionate, sincere, honest, character, cheerful, love youth education;<br/>
                            -Active working attitude, careful earnest, have high sense of responsibility,<br>
                            good team spirit, by perseverance and patience.<br/>
                        </div>
                        <div class="car" v-if="!isch">
                            -  对工作高度热情；<br>
                            -  有流利的中文表述、演讲能力、应对表达能力，英语口语规范；<br>
                            -  空闲时间较多，乐于挑战；<br>
                            -  热情、真诚、诚实、性格开朗、热爱青年教育；<br>
                            -  工作积极主动，仔细认真，责任心强，良好的团队精神，有毅力和耐心。

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mobile col-xs-12">
            <div class="col-xs-offset-1 col-xs-10">
                <h4><img src="../assets/img/main/events-title.png" alt="" class="logoThis"></h4>
                <h4 class="magnify">{{isch?'3D Designer':'3D设计师'}}</h4>
                <h5>{{isch?'Job responsibilities:':'工作职责：'}}</h5>
                <div class="car" v-if="isch">
                    According to customer requirements, analyze and plan the demand,<br>
                    complete the 3D effect diagram and construction drawings；<br>
                    Take Advantage of own background and knowledge to effectively control costs in design and production；<br>
                    Good communication with supplier, to control the replay/reconstruction of the site effects；<br>
                    Guide and supervise site construction progress.<br>
                </div>
                <div class="car" v-if="!isch">
                    根据客户要求，分析策划需求，完成活动3D效果图和施工图；<br>
                    利用自身的行业背景和知识，在设计和制作上有效的控制成本；<br>
                    与供应商进行良好的沟通，对现场效果还原度进行把控;<br>
                    指导和监察现场施工进度。
                </div>
                <h5 class="Hfive">{{isch?'Job requirements:':'任职要求：'}}</h5>
                <div class="car" v-if="isch">
                    College degree or above in art, good art skill, good understanding of creative concept；<br>
                    Strong learning ability, 2+ years working experience in the same industry；<br>
                    Good skill in CAD；Draw the suitable construction drawings according to 3D documents；<br>
                    Relevant working experience in interior design or related experience,<br> familiar with construction technology and size；<br>
                    Proficient in 3D design, to design the proper 3D scene according to the creative concept；<br>
                    Basic operation ability for PHOTOSHOP and illustrator software；<br>
                    Be familiar with the site construction, guide and supervise project progress,<br> organize construction, be familiar with material and process structure is preferred;<br>
                    Independent design for international brand activities or booth is preferred；<br>
                    Relevant experience in 4A company or event PR company is preferred.<br>
                </div>
                <div class="car" v-if="!isch">
                    -  艺术相关专业大专以上学历，良好的美术功底，对创意概念的领悟性强；<br>
                    -  具备较强的学习能力，2年以上同行业工作经验；<br>
                    -  熟练使用CAD, 能根据3D文件放样出合适的施工图；<br>
                    -  具有室内设计经历或相关经验，熟悉施工工艺和施工尺寸；<br>
                    -  精通3D设计，能根据创意概念设计出合适的3D场景；<br>
                    -  对Photoshop、illustrator 软件有最基本操作能力；<br>
                    -  熟悉现场施工，指导和监察工程进度，组织搭建，熟悉材料和工艺结构的设计师优先；<br>
                    -  有为国际品牌活动或展台做独立设计的设计师优先；<br>
                    -  有4A公司或活动公关公司服务经验者优先。

                </div>
            </div>
            <div class="col-xs-offset-1 col-xs-10">
                <h4><img src="../assets/img/main/events-title.png" alt="" class="logoThis"></h4>
                <h4 class="magnify">{{isch?'Senior Project Executive':'资深项目执行'}}</h4>
                <h5>{{isch?'Job responsibilities:':'工作职责：'}}</h5>
                <div class="car" v-if="isch">
                    Maintain good communication with customers to ensure the events go smoothly；<br>
                    Responsible for pre-activity purchasing, supplier contact and other preparatory work；<br>
                    Understand and analyze customer requirements to achieve the required results；<br>
                    Good cost management, supplier management and full support for the event projects；<br>
                    Summarize the projects in time, organize and save the related documents and data.<br>
                </div>
                <div class="car" v-if="!isch">
                    -  保持与客户的良好沟通，以确保项目执行的顺利进行；<br>
                    -  负责活动前采购、供应商联系等前期准备工作；<br>
                    -  理解并分析客户需求，以达到客户所需效果；<br>
                    -  做好成本管理，供应商管理并对项目活动提供全方位支持；<br>
                    -  及时进行项目总结，整理保存项目文件及数据。<br>
                </div>
                <h5 class="Hfive">{{isch?'Job requirements:':'任职要求：'}}</h5>
                <div class="car" v-if="isch">
                    3+ years’ relevant project executive (in Online or offline advertising agencies is preferred)；<br>
                    Project executive and customer service experience；<br>
                    Strong communication skills in both Chinese and English；<br>
                    Proficiency office software: word /excel/PowerPoint, etc.；<br>
                    Ability to handle complex tasks independently；<br>
                    Strong logical thinking ability and good language ability；<br>
                    Good physical and hardworking spirit；<br>
                    Good coordination and organizational skills, teamwork spirit；<br>
                    Responsibility, work well under pressure.<br>
                </div>
                <div class="car" v-if="!isch">
                    -  3年以上项目执行相关工作经验（线上或线下广告公司为佳）；<br>
                    -  项目实施执行、客户服务经验；<br>
                    -  较强的中英文沟通能力；<br>
                    -  熟练的操作office软件：word /excel/PowerPoint等；<br>
                    -  具有独立处理、解决复杂任务的能力；<br>
                    -  较强的逻辑思维能力，良好的语言表达能力；<br>
                    -  具备良好的身体素质和吃苦耐劳精神；<br>
                    -  具有良好的协调组织能力，团队合作精神；<br>
                    -  有责任心，较强的抗压能力。
                </div>
            </div>
            <div class="col-xs-offset-1 col-xs-10">
                <h4><img src="../assets/img/main/events-title.png" alt="" class="logoThis"></h4>
                <h4 class="magnify">{{isch?'Event Planner':'活动策划'}}</h4>
                <h5>{{isch?'Job responsibilities:':'工作职责：'}}</h5>
                <div class="car" v-if="isch">
                    Understand and be able to manage the pitch process - working<br>
                    with creative teams for the events concepts；<br>
                    -  Write, illustrate and assemble pitch proposals；<br>
                    -  Script writing skills in creative and video proposal；
                </div>
                <div class="car" v-if="!isch">
                    -  与创意团队一起探讨活动的概念并管理比稿进程； <br>
                    -  收集并撰写比稿方案;<br>
                    -  提供创意并且撰写视频方案。
                </div>
                <h5 class="Hfive">{{isch?'Job requirements:':'任职要求：'}}</h5>
                <div class="car" v-if="isch">
                    -2+ years’ relevant planning experience in event marketing or advertising agencies;<br>
                    -Proactive and creative；<br>
                    -Strong research skills and deliver the accurate messages;<br>
                    -Strong ability to effectively prioritize and meet deadlines；<br>
                    -Team-player, critical thinking.<br>
                </div>
                <div class="car" v-if="!isch">
                    -  2年以上相关活动营销或广告公司工作经验；<br>
                    -  逻辑性好，积极主动，有创意地形成观点；<br>
                    -  有较强的研究能力，以确保所有文案是正确及精确的；<br>
                    -  有较强的执行力，有效得安排工作，能在规定时间内完成任务；<br>
                    -  善于团队合作。

                </div>
            </div>
            <div class="col-xs-offset-1 col-xs-10">
                <h4><img src="../assets/img/main/live-title.png" alt="" class="logoThis"></h4>
                <h4 class="magnify">{{isch?'Marketing Manager':'市场经理'}}</h4>
                <h5>{{isch?'Job responsibilities:':'工作职责：'}}</h5>
                <div class="car" v-if="isch">
                    -  Achieve Yearly Department Expectations;<br>
                    -  Figure out market demands and look for new business opportunities and growth;<br>
                    -  Responsible for marketing strategy design and arrange marketing activities;<br>
                    -  Lead proposal planning, design and production for different clients;<br>
                    -  Develop and maintain key media clients;<br>
                    -  Department operation, team management and development;<br>
                </div>
                <div class="car" v-if="!isch">
                    -  实现部门年度目标； <br>
                    -  解决市场需求以及寻求新的业务增长点；<br>
                    -  负责市场营销策略的设计和安排营销活动； <br>
                    -  针对不同客户（媒体），对提案进行规划，设计及生成；<br>
                    -  开发及维护主要媒体客户；<br>
                    -  负责部门运作，团队管理及发展。
                </div>
                <h5 class="Hfive">{{isch?'Job requirements:':'任职要求：'}}</h5>
                <div class="car" v-if="isch">
                    -3 years + related working experience；<br>
                    -Good communication and coordination skill;<br>
                    -Innovative and critical thinking, sensitive information absorption capacity；<br>
                    -With large luxury offline events, 4A advertising company planning experience is preferred.<br>
                </div>
                <div class="car" v-if="!isch">
                    -  3年以上相关工作经验；<br>
                    -  有良好的沟通及协调能力；<br>
                    -  创新思维，有较高的信息敏感性；<br>
                    -  有大型奢侈品线下活动，4A广告公司策划经验者优先。<br>
                </div>
            </div>
            <div class="col-xs-offset-1 col-xs-10">
                <h4><img src="../assets/img/main/recreation-title.png" alt="" class="logoThis"></h4>
                <h4 class="magnify">{{isch?'Senior Coach':'资深教练'}}</h4>
                <h5>{{isch?'Job responsibilities:':'工作职责：'}}</h5>
                <div class="car" v-if="isch">
                    -Delivery training program for various groups of clients;<br/>
                    -Attend training sessions provided in house or external;<br/>
                    -Mentoring of the coaches;<br/>
                    -Provide in house trainings;<br/>
                    -Designing of training programs and activities;<br/>
                    -Attend to urgent work matters such as guides to prestige guests or recruitment.<br/>
                </div>
                <div class="car" v-if="!isch">
                    -  为各类客户提供培训课程； <br/>
                    -  参加内外部培训；<br/>
                    -  指导初级教练； <br/>
                    -  提供内部训练；<br/>
                    -  设计课程及活动；<br/>
                    -  参与紧急工作，例如重要客户的接待或招聘事宜。
                </div>
                <h5 class="Hfive">{{isch?'Job requirements:':'任职要求：'}}</h5>
                <div class="car" v-if="isch">
                    -3 years + working experience. 2 years + outdoor recreational activities background;<br>
                    -Very good English skill；<br>-Passionate, sincere, honest, character, cheerful, love youth education;<br>-Active, active working attitude, careful earnest, have high sense of responsibility, <br>-good team spirit, by perseverance and patience.<br>
                </div>
                <div class="car" v-if="!isch">
                    -  3年以上相关工作经验，2年以上户外运动背景；<br>
                    -  精通英语；<br>
                    -  热情、真诚、诚实、性格开朗、热爱青年教育；<br>
                    -  思维活跃、工作积极主动、仔细认真、责任心强；<br>
                    -  良好的团队精神，有毅力和耐心。
                </div>
            </div>
            <div class="col-xs-offset-1 col-xs-10">
                <h4><img src="../assets/img/main/recreation-title.png" alt="" class="logoThis"></h4>
                <h4 class="magnify">{{isch?'Program Manager':'课程经理'}}</h4>
                <h5>{{isch?'Job responsibilities:':'工作职责：'}}</h5>
                <div class="car" v-if="isch">
                    -Responsible for the day to day training;<br>
                    -Effective regulation training program, <br>in a timely manner to manage personnel reflect the training courses for situation;<br>
                    -Handling all kinds of problems in the process of teaching;<br>
                    -Team sports curriculum practice, feedback, teamwork.<br>
                </div>
                <div class="car" v-if="!isch">
                    -  负责日常培训； <br>
                    -  有效监管培训课程，及时了解客户对于课程的反馈；<br>
                    -  在教学过程中处理各种问题； <br>
                    -  团队运动课程的亲身实践，并给予反馈。
                </div>
                <h5 class="Hfive">{{isch?'Job requirements:':'任职要求：'}}</h5>
                <div class="car" v-if="isch">
                    -With high passion with this work<br/>
                    -Fluent Chinese language expression, presentations,<br>
                    and the corresponding expression ability, English spoken language standards;<br/>
                    -Free time is more, love challenge;<br/>
                    -Passionate, sincere, honest, character, cheerful, love youth education;<br/>
                    -Active working attitude, careful earnest, have high sense of responsibility,<br>
                    good team spirit, by perseverance and patience.<br/>
                </div>
                <div class="car" v-if="!isch">
                    -  对工作高度热情；<br>
                    -  有流利的中文表述、演讲能力、应对表达能力，英语口语规范；<br>
                    -  空闲时间较多，乐于挑战；<br>
                    -  热情、真诚、诚实、性格开朗、热爱青年教育；<br>
                    -  工作积极主动，仔细认真，责任心强，良好的团队精神，有毅力和耐心。

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { bus } from '../assets/js/app/public';
    export default {
        name: 'career-view',
        data(){
            return{
                isch:''
            }
        },
        created() {
            bus.$on('language',(val) => {this.isch = val})
            this.$bus.$emit('canvas-close');
        },
        mounted() {
            setTimeout(() => this.$('.career-view').fadeIn(), 500);
        },
    };
</script>

<style lang="less">
    @import '../assets/style/common.less';
    @import '../assets/style/but';

    .career-view {
        .info {
            .position {
                margin-bottom: 5em;
            }
            .newJob:after {
                display: block;
                clear: both;
                content: '';
                visibility: hidden;
            }
            .newJob{
                >div{
                    padding: 0 80px;
                }
            }
        }

        .car {
            margin-top: 0 !important;
            font-size: 12px;
            line-height: 2em;
        }

        .Hfive {
            margin-top: 0px;
        }

        .career-view {
            display: none;
        }

        .sendmail {
            cursor: pointer;
            margin-bottom: 2em;
        }

        .purple {
            color: purple;
        }

        .magnify {
            font-size: 1.5em !important;
            /*color: #fff;*/
        }

        h5 {
            /*color: #d1d1d1;*/
            margin: 0;
            margin-top: 1em;
        }

        .email {
            /*display: inline-block;*/
            /*border: 1px solid;*/
            /*padding: 1px 20px;*/
            /*margin-top: 2em;*/
        }

        .logoThis {
            height: 24px;
        }

        .mobile {
            display: none;
        }
    }

    @media screen and (max-width: @max-width) {
        .info-view {
            .row {
                margin-top: 2em !important;
            }
            .mobile {
                display: block;
                margin-top: 2em;
                div {
                    text-align: center;
                    margin-bottom: 2em;
                }
            }
            .pc {
                display: none;
            }
        }
    }
</style>
