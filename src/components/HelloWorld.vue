<template>
    <div class="md-layout main">
        <div class="md-layout-item md-gutter md-layout md-size-100 first bigBlock  ">
            <span class=" md-layout-item md-size-100  title">        Contacts   </span>
            <span class=" md-layout-item md-size-50 md-medium-size-100 md-small-size-100 md-xsmall-size-100 preTitle"> <strong
                    class="greened">GSM</strong> Headquarters</span>
            <span class="  md-layout-item md-size-50  md-medium-size-100 md-small-size-100 md-xsmall-size-100 preTitle"> Technical support <strong
                    class="greened">24/7</strong> </span>
            <div class="md-layout-item md-size-25 md-medium-size-50  md-small-size-100 md-xsmall-size-100 md-layout">
                <span class="md-layout-item md-size-100">
                    Global Message Services Ukraine LCC
                </span>
                <span class="md-layout-item md-size-100">
                    Bundesstrasse 5 | 3rd Floor
                </span>
                <span class="md-layout-item md-size-100">
                    6300 Zug
                </span>
                <span class="md-layout-item md-size-100">
                    Switzerland
                </span>
                <span class="greened md-layout-item md-size-100 phone lastDiv">
                    +41 41 544 62 00
                </span>
            </div>
            <div class="md-layout-item md-size-25 ">
                <div>
                    Email
                </div>
                <a class="greened">
                    INFO@GMS-WORLDWIDE
                </a>
                <div>
                    Send Message
                </div>
                <a class="greened">
                    VIBER US
                </a>
                <div>
                    Send form
                </div>

                <a class="lastDiv greened">
                    CONTACT US
                </a>
            </div>
            <div class="md-layout-item md-size-50 md-medium-size-100  md-xsmall-size-100 md-small-size-100 md-layout">
                <div class="md-layout-item md-size-100">
                    GSM understands that it can be hard to follow all new technologies. We regularly provide for all our
                    clients educational trainings to make your operator's business earn more and better though our best
                    practice.
                </div>
                <div class="greened md-layout-item phone lastDiv md-medium-hide">
                    +41 41 544 62 00
                </div>
            </div>
        </div>
        <div class="md-layout-item md-layout md-size-100  white second">
            <div class="md-layout-item md-layout md-size-50 md-medium-size-100 md-small-size-100 md-xsmall-size-100 bigBlock">
                <div class=" md-layout-item md-size-100">
                    <div class="title">
                        Our Offices
                    </div>
                </div>
                <div class="md-layout-item md-size-100">
                    <md-tabs class="md-primary" @md-changed="selectTab">
                        <md-tab id="tab-home" md-label="Kyiv" exact>
                            <div class="md-layout white">
                                <span class=" md-layout-item md-size-100 preTitle">
                                    Global Message Services Ukraine LLC
                                </span>
                                <p class=" md-layout-item md-size-100 ">Kyiv, Stepan Bandera, 33</p>
                                <p class=" md-layout-item md-size-100 ">020066</p>
                                <p class=" md-layout-item md-size-100 "> Ukraine</p>
                            </div>
                        </md-tab>

                        <md-tab id="tab-pages" md-label="New York">
                            <div class="md-layout white">
                                <span class=" md-layout-item md-size-100 preTitle">
                                    New York
                                </span>
                                <p class=" md-layout-item md-size-100 ">New York, Stepan Bandera, 33</p>
                                <p class=" md-layout-item md-size-100 ">020066</p>
                                <p class=" md-layout-item md-size-100 "> New York</p>
                            </div>
                        </md-tab>

                        <md-tab id="tab-posts" md-label="GuangZhou">
                            <div class="md-layout white">
                                <span class=" md-layout-item md-size-100 preTitle">
                                    GuangZhou
                                </span>
                                <p class=" md-layout-item md-size-100 ">GuangZhou, Stepan Bandera, 33</p>
                                <p class=" md-layout-item md-size-100 ">020066</p>
                                <p class=" md-layout-item md-size-100 "> Ukraine</p>
                            </div>
                        </md-tab>

                        <md-tab id="tab-favorites" md-label="Barcelona">
                            <div class="md-layout white">
                                <span class=" md-layout-item md-size-100 preTitle">
                                    Barcelona
                                </span>
                                <p class=" md-layout-item md-size-100 ">Barcelona, Stepan Bandera, 33</p>
                                <p class=" md-layout-item md-size-100 ">020066</p>
                                <p class=" md-layout-item md-size-100 "> Ukraine</p>
                            </div>
                        </md-tab>
                    </md-tabs>
                </div>
            </div>
            <div class="md-layout-item  md-size-50 md-medium-hide ">
                <GmapMap
                        :center="currentPoint.position"
                        :zoom="10"
                        :options="mapStyle"
                        map-type-id="terrain"
                        style="width: 100%; height: 100%;"
                >
                    <GmapMarker
                            style="z-index: 1000"
                            :position="currentPoint.position"
                            :clickable="true"
                            :draggable="true"
                    />
                </GmapMap>

            </div>
        </div>
        <div class="md-layout-item md-layout md-size-100 bigBlock white third">
            <span class=" md-layout-item md-size-100 title">
                    Contact Us
                </span>
            <div class="md-layout-item md-layout md-size-50 ">

                <div class="md-layout-item md-size-80">
                    <md-field class="form-group formInput" :class="{ 'form-group--error': $v.name.$error }">
                        <label>Name</label>
                        <md-input v-model="name" @input="updateName"/>
                    </md-field>
                    <span v-if="!$v.name.mustBeGreat">Only latters and spaces.</span>
                    <span v-if="!$v.name.required">Name is required</span>
                    <span v-else-if="!$v.name.maxLength">Max number is 30 letters.</span>
                </div>

                <div class="md-layout-item md-size-80">
                    <md-field class="form-group formInput" :class="{ 'form-group--error': $v.phone.$error }">
                        <label>Phone</label>
                        <md-input v-model="phone" @input="updatePhone"/>
                    </md-field>
                    <span v-if="!$v.phone.required">Phone is required</span>
                    <span v-else-if="!$v.phone.mustBeCool">Phone must be start from +380</span>
                    <span v-else-if="!$v.phone.minLength">Name must have at least {{$v.phone.$params.minLength.min}} numbers.</span>
                </div>

                <div class="md-layout-item md-size-80">
                    <md-field class="form-group formInput" :class="{ 'form-group--error': $v.email.$error }">
                        <label>E-mail</label>
                        <md-input v-model="email" @input="updateEmail"/>
                    </md-field>
                    <span v-if="!$v.email.required">Email is required</span>
                    <span v-else-if="!$v.email.email">That's not email</span>

                    <md-checkbox class="md-layout-item md-size-100 " v-model="boolean">I agree the processing of
                        personal data
                    </md-checkbox>
                    <md-button class="md-raised md-primary md-layout-item submitButton " @click="postForm"
                               :disabled=isDisabled>get in touch
                    </md-button>
                </div>

            </div>
            <div class="md-layout-item  md-layout md-size-50 bigBlock ">
                <span class="md-layout-item last" style="line-height: 36px">
                    Please tell us more about your request and give us info about your company and country
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    import {validationMixin} from 'vuelidate'
    import googleMapStyle from '../map/googleMapStyle';
    import {mapState} from "vuex";
    import minLength from "vuelidate/lib/validators/minLength"
    import required from "vuelidate/lib/validators/required"
    import email from "vuelidate/lib/validators/email";
    import maxLength from "vuelidate/lib/validators/maxLength";
    import axios from 'axios';

    const mustBeCool = (phone) => phone.indexOf('+380') === 0;

    const mustBeGreat = (name) => {
        // eslint-disable-next-line no-console
        if (name) {
            let match = name.match(/^[a-z][a-z\s]*$/);
            // eslint-disable-next-line no-console
            return match !== null;
        }
        return true;
    };

    export default {
        name: 'HelloWorld',
        mixins: [validationMixin],
        validations: {
            name: {
                mustBeGreat,
                required,
                maxLength: maxLength(30)
            },
            phone: {
                required,
                mustBeCool,
                minLength: minLength(10)
            },
            email: {
                email,
                required,
                minLength: minLength(4)
            }
        },
        props: {},
        data: () => {
            return {
                isLoading: false,
                submitStatus: null,
                boolean: false,
                currentTab: 'tab-home',
                tabs: [
                    {
                        name: "tab-home",
                        position: {lat: 50.505313, lng: 30.377481},
                    },
                    {
                        name: "tab-pages",
                        position: {lat: 50.505313, lng: 14.377481},
                    },
                    {
                        name: "tab-posts",
                        position: {lat: 50.505313, lng: 2.377481},
                    },
                    {
                        name: "tab-favorites",
                        position: {lat: 50.505313, lng: 80.377481},
                    }
                ],
                mapStyle: {
                    styles: googleMapStyle
                }
            }
        },
        computed: {
            currentPoint(){
                return this.tabs.find(wtf => wtf.name === this.currentTab);
            },
            isDisabled( ) {
                // evaluate whatever you need to determine disabled here...
                if (this.$v.email.required && this.$v.email.email && this.$v.phone.required && this.$v.phone.minLength && this.$v.name.required && this.$v.name.maxLength && this.$v.phone.mustBeCool && !this.isLoading)  {
                    return false;
                } else {
                    return true;
                }
            },
            ...mapState({
                name: state => state.form.name,
                phone: state => state.form.phone,
                email: state => state.form.email
            })
        },

        methods: {
            selectTab(name) {
                this.currentTab = name;
            },

            postForm() {
                this.isLoading = true;
                const vm = this;
                axios.post('https://httpbin.org/post', this.$store.state.form)
                    .then(function (response) {
                        // eslint-disable-next-line no-console
                        console.log(response);
                        vm.isLoading = false;
                        alert("Send!")
                    })
                    .catch(function (error) {
                        // eslint-disable-next-line no-console
                        console.log(error);
                        vm.isLoading = false;
                        alert("Error!")
                    });
            },


            updateName(e) {
                // eslint-disable-next-line no-console
                console.log(e)
                this.$store.commit('updateName', e)
            },
            updatePhone(e) {
                this.$store.commit('updatePhone', e)
            },
            updateEmail(e) {
                this.$store.commit('updateEmail', e)
            },

        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

    .md-tabs-content {
        background-color: #252525 !important;
        color: #252525 !important;
    }

    .formInput {
        min-height: 50px;
        padding-bottom: 8px;
    }

    .submitButton {
        height: 90px !important;
        width: 270px;
    }

    .md-checkbox {
        color: white;
        font-size: 16px;
    }

    .last {
        color: black;
        font-size: 28px;
    }

    .lastDiv {
        padding-bottom: 24px;
    }

    .white {
        color: white;
    }


    .greened {
        color: limegreen !important;
    }

    .phone {
        padding-top: 30px;
        font-size: 24px;
    }

    .title {
        padding: 2% 0% 1% 0%;
        font-size: 42px;
    }

    .preTitle {
        padding: 1% 0% 1% 0%;
        font-size: 36px;
    }

    .first {
        height: 28%;
    }

    .md-tab {
        background-color: #252525 !important;
        min-height: 102%;
    }

    .second {
        background-color: #252525;
        height: 30%;
    }

    .third {
        background-color: #00bd56;
        height: 42%;
    }

    .main {
        height: 1575px;
        min-height: 100vh;
        font-family: 'SuisseIntl-Light', Fallback, sans-serif;
        font-size: 16px;
    }

    title {
        font-family: 'SuisseIntl-SemiBold', Fallback, sans-serif !important;

    }

    .bigBlock {
        padding: 5vh 5vh 5vh 5vh;
    }

    .tabBlock {
        padding: 0vh 5vh 0vh 5vh;
    }

</style>
