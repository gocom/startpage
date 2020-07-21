import moment from 'moment';

export default {
    data () {
        return {
            hours: '',
            minutes: '',
            seconds: '',
            amPm: '',
        };
    },

    methods: {
        format(format) {
            return moment().format(format);
        }
    },

    mounted() {
        const self = this;

        const clockTimer = function () {
            const date = new Date();

            const time = {
                hours: date.getHours(),
                minutes: date.getMinutes(),
                seconds: date.getSeconds(),
                amPm: 'AM',
            };

            if (time.hours === 0) {
                time.hours = 12;
            }

            if (time.hours > 12) {
                time.hours -= 12;
                time.amPm = 'PM';
            }

            Object.keys(time).forEach((component) => {
                let value = time[component];

                if (Number.isInteger(value) && value < 10) {
                    value = '0' + value;
                }

                self[component] = value;
            });

            self.clockTimer = setTimeout(clockTimer, 1000);
        };

        clockTimer();
    },

    beforeDestroy() {
        clearTimeout(this.clockTimer);
    }
};
