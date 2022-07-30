<script>
    export let music_list;
</script>

<h2>List of added music:</h2>
<ul>
    {#each music_list as {name, url}}
        <li>
            {name}
            (<a href={url} target="_blank" rel="noopener noreferrer">
                {url}
            </a>)
        </li>
    {/each}
</ul>
