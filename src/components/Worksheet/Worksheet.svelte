<script>
    import Page1 from './Page1';
    import Page2 from './Page2';
    import getNewWorksheet from '../../model/worksheet'
    export let worksheet=getNewWorksheet()
</script>

<Page1 bind:worksheet={worksheet} />
<Page2 bind:worksheet={worksheet} />