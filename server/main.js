import '../imports/api/tasks.js';

ServiceConfiguration.configurations.remove({
    service: "facebook"
});

ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: '1663364747300025',
    secret: '197749adc76bfaac7c54135070942489'
});
